import { fireEvent, render, screen } from '@testing-library/react-native';

import FilterButtons from './FilterButtons';
import { Filter } from './types';

describe('FilterButtons', () => {
  it('Should show both buttons if filter is set to all', async () => {
    const setFilter = jest.fn();

    render(<FilterButtons filter={Filter.All} setFilter={setFilter} />);

    const buttons = await screen.findAllByTestId('ButtonContainer');

    expect(buttons).toHaveLength(2);

    const [IncomesButton, ExpensesButton] = buttons;

    expect(IncomesButton).toHaveStyle({ flexGrow: 1, opacity: 1 });
    expect(IncomesButton).toHaveTextContent('Ganados');
    expect(ExpensesButton).toHaveStyle({ flexGrow: 1, opacity: 1 });
    expect(ExpensesButton).toHaveTextContent('Canjeados');
  });

  it('Should show only incomes button if filter is set to incomes', async () => {
    const setFilter = jest.fn();

    render(<FilterButtons filter={Filter.Incomes} setFilter={setFilter} />);

    const buttons = await screen.findAllByTestId('ButtonContainer');

    expect(buttons).toHaveLength(2);

    const [IncomesButton, ExpensesButton] = buttons;

    expect(IncomesButton).toHaveStyle({ flexGrow: 1, opacity: 1 });
    expect(IncomesButton).toHaveTextContent('Todos');
    expect(ExpensesButton).toHaveStyle({ flexGrow: 0, opacity: 0 });
    expect(ExpensesButton).toHaveTextContent('');
  });

  it('Should show only expenses button if filter is set to expenses', async () => {
    const setFilter = jest.fn();

    render(<FilterButtons filter={Filter.Expenses} setFilter={setFilter} />);

    const buttons = await screen.findAllByTestId('ButtonContainer');

    expect(buttons).toHaveLength(2);

    const [IncomesButton, ExpensesButton] = buttons;

    expect(IncomesButton).toHaveStyle({ flexGrow: 0, opacity: 0 });
    expect(IncomesButton).toHaveTextContent('');
    expect(ExpensesButton).toHaveStyle({ flexGrow: 1, opacity: 1 });
    expect(ExpensesButton).toHaveTextContent('Todos');
  });

  it('Should call setFilter with Filter.Incomes when incomes button is pressed', async () => {
    const setFilter = jest.fn();

    render(<FilterButtons filter={Filter.All} setFilter={setFilter} />);

    const buttons = await screen.findAllByTestId('ButtonContainer');

    expect(buttons).toHaveLength(2);

    const [IncomesButton] = buttons;
    fireEvent(IncomesButton, 'press');

    expect(setFilter).toHaveBeenCalledWith(Filter.Incomes);
  });

  it('Should call setFilter with Filter.Expenses when expenses button is pressed', async () => {
    const setFilter = jest.fn();

    render(<FilterButtons filter={Filter.All} setFilter={setFilter} />);

    const buttons = await screen.findAllByTestId('ButtonContainer');

    expect(buttons).toHaveLength(2);

    const ExpensesButton = buttons[1];
    fireEvent(ExpensesButton, 'press');

    expect(setFilter).toHaveBeenCalledWith(Filter.Expenses);
  });

  it('Should call setFilter with Filter.All when any button is pressed and the current filter is not All', async () => {
    const setFilter = jest.fn();

    render(<FilterButtons filter={Filter.Incomes} setFilter={setFilter} />);

    const buttons = await screen.findAllByTestId('ButtonContainer');

    expect(buttons).toHaveLength(2);

    const [IncomesButton] = buttons;
    fireEvent(IncomesButton, 'press');

    expect(setFilter).toHaveBeenCalledWith(Filter.All);
  });
});
