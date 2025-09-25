import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Search } from 'lucide-react-native';

const carDatabase = [
  { id: 1, name: 'Rolls-Royce Boat Tail', price: '$28 Million', brand: 'Rolls-Royce' },
  { id: 2, name: 'Bugatti La Voiture Noire', price: '$18.7 Million', brand: 'Bugatti' },
  { id: 3, name: 'Pagani Zonda HP Barchetta', price: '$17.5 Million', brand: 'Pagani' },
  { id: 4, name: 'Rolls-Royce Sweptail', price: '$13 Million', brand: 'Rolls-Royce' },
  { id: 5, name: 'Bugatti Centodieci', price: '$9 Million', brand: 'Bugatti' },
  { id: 6, name: 'Mercedes-Maybach Exelero', price: '$8 Million', brand: 'Mercedes-Maybach' },
  { id: 7, name: 'Koenigsegg CCXR Trevita', price: '$4.8 Million', brand: 'Koenigsegg' },
  { id: 8, name: 'Lamborghini Veneno', price: '$4.5 Million', brand: 'Lamborghini' },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState(carDatabase);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredCars(carDatabase);
    } else {
      const filtered = carDatabase.filter(car =>
        car.name.toLowerCase().includes(query.toLowerCase()) ||
        car.brand.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  const renderCarItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.carItem}>
      <View style={styles.carItemContent}>
        <View>
          <Text style={styles.carItemName}>{item.name}</Text>
          <Text style={styles.carItemBrand}>{item.brand}</Text>
        </View>
        <Text style={styles.carItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1E3A8A', '#3B82F6']}
        style={styles.header}>
        <Text style={styles.headerTitle}>Search Luxury Cars</Text>
      </LinearGradient>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color="#94A3B8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by car name or brand..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          {filteredCars.length} car{filteredCars.length !== 1 ? 's' : ''} found
        </Text>
        
        <FlatList
          data={filteredCars}
          renderItem={renderCarItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
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
  },
  searchContainer: {
    padding: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: '#334155',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultsText: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 16,
    fontWeight: '500',
  },
  listContainer: {
    paddingBottom: 100,
  },
  carItem: {
    backgroundColor: '#1E293B',
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  carItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carItemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  carItemBrand: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '500',
  },
  carItemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F59E0B',
  },
});