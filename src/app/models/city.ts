export class DistrictAddress {
  'id': number;
  'districtName': string;
  'prefix': string;
  'cityAddressId': number;
}

export class City{
  'id': number;
  'cityName': string;
  'cityCode': string;
  'districtAddresses': DistrictAddress[];
}
