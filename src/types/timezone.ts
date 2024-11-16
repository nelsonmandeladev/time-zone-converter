export interface TimeZone {
  id: string;
  name: string;
  value: string;
}

export const timeZones: TimeZone[] = [
  // Africa
  { id: 'yaounde', name: 'Yaoundé (Cameroon)', value: 'Africa/Douala' },
  { id: 'douala', name: 'Douala (Cameroon)', value: 'Africa/Douala' },
  { id: 'bamenda', name: 'Bamenda (Cameroon)', value: 'Africa/Douala' },
  { id: 'garoua', name: 'Garoua (Cameroon)', value: 'Africa/Douala' },
  { id: 'maroua', name: 'Maroua (Cameroon)', value: 'Africa/Douala' },
  { id: 'lagos', name: 'Lagos (Nigeria)', value: 'Africa/Lagos' },
  { id: 'cairo', name: 'Cairo (Egypt)', value: 'Africa/Cairo' },
  { id: 'nairobi', name: 'Nairobi (Kenya)', value: 'Africa/Nairobi' },
  { id: 'johannesburg', name: 'Johannesburg (South Africa)', value: 'Africa/Johannesburg' },
  { id: 'casablanca', name: 'Casablanca (Morocco)', value: 'Africa/Casablanca' },
  { id: 'dakar', name: 'Dakar (Senegal)', value: 'Africa/Dakar' },
  { id: 'addis-ababa', name: 'Addis Ababa (Ethiopia)', value: 'Africa/Addis_Ababa' },

  // North America
  { id: 'toronto', name: 'Toronto', value: 'America/Toronto' },
  { id: 'vancouver', name: 'Vancouver', value: 'America/Vancouver' },
  { id: 'montreal', name: 'Montreal', value: 'America/Montreal' },
  { id: 'calgary', name: 'Calgary', value: 'America/Edmonton' },
  { id: 'halifax', name: 'Halifax', value: 'America/Halifax' },
  { id: 'new-york', name: 'New York', value: 'America/New_York' },
  { id: 'los-angeles', name: 'Los Angeles', value: 'America/Los_Angeles' },
  
  // Europe
  { id: 'london', name: 'London', value: 'Europe/London' },
  { id: 'paris', name: 'Paris', value: 'Europe/Paris' },
  
  // Asia/Pacific
  { id: 'tokyo', name: 'Tokyo', value: 'Asia/Tokyo' },
  { id: 'sydney', name: 'Sydney', value: 'Australia/Sydney' },
  { id: 'dubai', name: 'Dubai', value: 'Asia/Dubai' },
  { id: 'singapore', name: 'Singapore', value: 'Asia/Singapore' },
];