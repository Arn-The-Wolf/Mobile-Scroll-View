import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface Car {
  id: number;
  name: string;
  price: string;
  year: number;
  description: string;
  specs: {
    engine: string;
    horsepower: string;
    topSpeed: string;
    acceleration: string;
  };
  imageUrl: string;
}

const expensiveCars: Car[] = [
  {
    id: 1,
    name: 'Rolls-Royce Boat Tail',
    price: '$28 Million',
    year: 2021,
    description: 'The most expensive new car ever sold, the Boat Tail is a bespoke masterpiece that took four years to develop. Only three units were ever made, each tailored to its owner\'s exact specifications.',
    specs: {
      engine: '6.75L Twin-Turbo V12',
      horsepower: '563 HP',
      topSpeed: '155 MPH',
      acceleration: '0-60 in 5.8s'
    },
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
  },
  {
    id: 2,
    name: 'Bugatti La Voiture Noire',
    price: '$18.7 Million',
    year: 2019,
    description: 'A one-off hypercar that pays homage to the legendary Bugatti Type 57 SC Atlantic. This unique creation represents the pinnacle of automotive craftsmanship and engineering excellence.',
    specs: {
      engine: '8.0L Quad-Turbo W16',
      horsepower: '1,479 HP',
      topSpeed: '261 MPH',
      acceleration: '0-60 in 2.4s'
    },
    imageUrl: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg'
  },
  {
    id: 3,
    name: 'Pagani Zonda HP Barchetta',
    price: '$17.5 Million',
    year: 2017,
    description: 'Limited to just three units, this open-top masterpiece combines Italian artistry with extreme performance. Each car features unique carbon fiber bodywork and bespoke interior craftsmanship.',
    specs: {
      engine: '7.3L Naturally Aspirated V12',
      horsepower: '789 HP',
      topSpeed: '221 MPH',
      acceleration: '0-60 in 3.4s'
    },
    imageUrl: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg'
  },
  {
    id: 4,
    name: 'Rolls-Royce Sweptail',
    price: '$13 Million',
    year: 2017,
    description: 'A completely bespoke automobile commissioned by a mysterious collector. This one-off coupe took four years to complete and represents the ultimate in automotive luxury and exclusivity.',
    specs: {
      engine: '6.75L Twin-Turbo V12',
      horsepower: '453 HP',
      topSpeed: '155 MPH',
      acceleration: '0-60 in 5.6s'
    },
    imageUrl: 'https://images.pexels.com/photos/1104014/pexels-photo-1104014.jpeg'
  },
  {
    id: 5,
    name: 'Bugatti Centodieci',
    price: '$9 Million',
    year: 2020,
    description: 'Limited to just 10 units, the Centodieci celebrates Bugatti\'s 110th anniversary while paying tribute to the iconic EB110. Each car delivers unprecedented performance and exclusivity.',
    specs: {
      engine: '8.0L Quad-Turbo W16',
      horsepower: '1,577 HP',
      topSpeed: '236 MPH',
      acceleration: '0-60 in 2.4s'
    },
    imageUrl: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg'
  },
  {
    id: 6,
    name: 'Mercedes-Maybach Exelero',
    price: '$8 Million',
    year: 2005,
    description: 'A unique high-performance sports car built for tire testing, the Exelero combines luxury with extreme performance. This one-off prototype showcases Mercedes-Benz engineering prowess.',
    specs: {
      engine: '5.9L Twin-Turbo V12',
      horsepower: '690 HP',
      topSpeed: '218 MPH',
      acceleration: '0-60 in 4.4s'
    },
    imageUrl: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg'
  },
  {
    id: 7,
    name: 'Koenigsegg CCXR Trevita',
    price: '$4.8 Million',
    year: 2009,
    description: 'Known for its diamond-weave carbon fiber body, only two Trevitas were ever produced. This Swedish hypercar combines stunning aesthetics with incredible performance capabilities.',
    specs: {
      engine: '4.8L Twin-Supercharged V8',
      horsepower: '1,018 HP',
      topSpeed: '254 MPH',
      acceleration: '0-60 in 2.9s'
    },
    imageUrl: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg'
  },
  {
    id: 8,
    name: 'Lamborghini Veneno',
    price: '$4.5 Million',
    year: 2013,
    description: 'Built to celebrate Lamborghini\'s 50th anniversary, only 5 units were produced. The Veneno features extreme aerodynamics and aggressive styling that pushes automotive design boundaries.',
    specs: {
      engine: '6.5L Naturally Aspirated V12',
      horsepower: '740 HP',
      topSpeed: '221 MPH',
      acceleration: '0-60 in 2.8s'
    },
    imageUrl: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg'
  }
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1E3A8A', '#3B82F6']}
        style={styles.header}>
        <Text style={styles.headerTitle}>World's Most Expensive Cars</Text>
        <Text style={styles.headerSubtitle}>Exclusive Automotive Masterpieces</Text>
      </LinearGradient>
      
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {expensiveCars.map((car, index) => (
          <View key={car.id} style={styles.carCard}>
            <View style={styles.rankBadge}>
              <Text style={styles.rankText}>#{index + 1}</Text>
            </View>
            
            <Image
              source={{ uri: car.imageUrl }}
              style={styles.carImage}
              resizeMode="cover"
            />
            
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.imageOverlay}
            />
            
            <View style={styles.carInfo}>
              <View style={styles.carHeader}>
                <Text style={styles.carName}>{car.name}</Text>
                <Text style={styles.carPrice}>{car.price}</Text>
                <Text style={styles.carYear}>({car.year})</Text>
              </View>
              
              <Text style={styles.carDescription}>{car.description}</Text>
              
              <View style={styles.specsContainer}>
                <Text style={styles.specsTitle}>Specifications:</Text>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Engine:</Text>
                  <Text style={styles.specValue}>{car.specs.engine}</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Power:</Text>
                  <Text style={styles.specValue}>{car.specs.horsepower}</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Top Speed:</Text>
                  <Text style={styles.specValue}>{car.specs.topSpeed}</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>0-60 mph:</Text>
                  <Text style={styles.specValue}>{car.specs.acceleration}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            These automotive masterpieces represent the pinnacle of luxury, performance, and exclusivity.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#F59E0B',
    fontWeight: '500',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  carCard: {
    backgroundColor: '#1E293B',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  rankBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#F59E0B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 10,
  },
  rankText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  carImage: {
    width: '100%',
    height: 200,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  carInfo: {
    padding: 20,
  },
  carHeader: {
    marginBottom: 12,
  },
  carName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  carPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F59E0B',
    marginBottom: 2,
  },
  carYear: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: '500',
  },
  carDescription: {
    fontSize: 16,
    color: '#CBD5E1',
    lineHeight: 24,
    marginBottom: 16,
  },
  specsContainer: {
    backgroundColor: '#334155',
    padding: 16,
    borderRadius: 12,
  },
  specsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F59E0B',
    marginBottom: 12,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  specLabel: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '500',
  },
  specValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
  },
});