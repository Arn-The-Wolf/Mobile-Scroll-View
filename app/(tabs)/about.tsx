import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Car, Award, Zap, Shield } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1E3A8A', '#3B82F6']}
        style={styles.header}>
        <Text style={styles.headerTitle}>About</Text>
        <Text style={styles.headerSubtitle}>Luxury Car Collection</Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Car size={32} color="#F59E0B" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            We showcase the world's most exclusive and expensive automobiles, 
            highlighting the pinnacle of automotive engineering, luxury, and craftsmanship. 
            Each vehicle represents decades of innovation and artistic excellence.
          </Text>
        </View>

        <View style={styles.section}>
          <Award size={32} color="#F59E0B" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Exclusivity</Text>
          <Text style={styles.sectionText}>
            These automotive masterpieces are more than just cars - they're works of art. 
            With production numbers often limited to single digits, each vehicle represents 
            the ultimate in exclusivity and prestige.
          </Text>
        </View>

        <View style={styles.section}>
          <Zap size={32} color="#F59E0B" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Performance</Text>
          <Text style={styles.sectionText}>
            Beyond their luxury appeal, these cars deliver extraordinary performance. 
            From Bugatti's quad-turbo W16 engines to Pagani's naturally aspirated V12s, 
            each vehicle pushes the boundaries of what's possible in automotive engineering.
          </Text>
        </View>

        <View style={styles.section}>
          <Shield size={32} color="#F59E0B" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Craftsmanship</Text>
          <Text style={styles.sectionText}>
            Every detail is meticulously crafted by master artisans. From hand-stitched 
            leather interiors to carbon fiber bodywork that takes months to perfect, 
            these vehicles represent the highest levels of human craftsmanship.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Created with passion for automotive excellence</Text>
          <Text style={styles.footerText}>
            This collection celebrates the intersection of art, technology, and luxury 
            that defines the world's most expensive automobiles.
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
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#F59E0B',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  sectionIcon: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    color: '#CBD5E1',
    lineHeight: 24,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F59E0B',
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',
  },
});