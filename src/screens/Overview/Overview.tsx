import format from 'date-fns/format';
import es from 'date-fns/locale/es';
import type { FC } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { Button, Section } from '../../components';
import type { Product } from '../../controllers';
import styles from './styles';

interface Props {
  onAccept(): void;
  product: Product;
}

const Overview: FC<Props> = ({ onAccept, product }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <Section isSmallTitle={true} title="Detalles del producto:">
        <Text style={styles.details}>Comprado el {format(product.createdAt, 'PPP', { locale: es })}</Text>
      </Section>
      <Section isSmallTitle={true} title={`Con esta compra ${product.isRedemption ? 'canjeaste' : 'acumulaste'}:`}>
        <Text style={styles.points}>{product.points.toLocaleString('es-MX')} puntos</Text>
      </Section>
      <SafeAreaView>
        <Button onPress={onAccept} text="Aceptar" />
      </SafeAreaView>
    </ScrollView>
  </View>
);

export default Overview;
