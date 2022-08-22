# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# AWS S3
pathname = 

User.destroy_all
Listing.destroy_all

demo = User.create!(
  first_name: 'Demo',
  last_name: 'User',
  email: 'demouser@yourbnb.com',
  password: '123456'
)

andrea = User.create!(
  first_name: 'Andrea',
  last_name: 'de Guzman',
  email: 'padgzmn@gmail.com',
  password: '123456'
)

andy = User.create!(
  first_name: 'Andy',
  last_name: 'Liu',
  email: 'cloudy1126@gmail.com',
  password: '123456'
)

anthony = User.create!(
  first_name: 'Anthony',
  last_name: 'Chao',
  email: 'anthonyschaowder@gmail.com',
  password: '123456'
)

michael = User.create!(
  first_name: 'Michael',
  last_name: 'Cen',
  email: 'michaelngcen@yahoo.com',
  password: '123456'
)

#Location: New York City

listing_one = Listing.create!(
  host_id: andrea.id,
  title: "SoHo Apt. in Historic Townhouse - Private Entrance",
  description: "Historic townhouse building, stylishly decorated 1 BR in chic Soho. Views of the park, steps away from fabulous restaurants, ideally located away from the fray but close to amazing shopping, dining & exploring NYC.",
  lat: 40.725088,
  lng: -74.000605,
  street: "115 Wooster St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: "10012",
  price: 340.00,
  price_currency: "USD" ,
  property_type: "Townhouse",
  price_per_night: "per night",
  additional_fees: 75,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

listing_two = Listing.create!(
  host_id: andy.id,
  title: "UNTITLED at Freeman - Tower Balcony Studio 1401",
  description: "Charming Studio with a balcony located in the heart of Lower East Side of Manhattan.",
  lat: 40.727517781962,
  lng: -73.98836964777286,
  street: "270 E 6th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: "10003",
  price: 270.00,
  price_currency: "USD" ,
  property_type: "Condominium",
  price_per_night: "per night",
  additional_fees: 0,
  num_guest: 3,
  num_beds: 2,
  num_baths: 2
)

listing_three = Listing.create!(
  host_id: anthony.id,
  title: "Sonder Battery Park - Studio Apartment",
  description: "From the moment you see the waterfront from the roof, you\’ll know you made the right choice. Your Sonder comes with its own kitchenette and dining nook. There\’s also a (seasonal) rooftop pool to go along with that waterfront view we mentioned, a fitness center, a golf simulator, and a co-working space.",
  lat: 40.708398735680966,
  lng: -74.00694870116126,  
  street: "270 E 6th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: "10003",
  price: 270.00,
  price_currency: "USD" ,
  property_type: "Studio",
  price_per_night: "per night",
  additional_fees: 0,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

listing_four = Listing.create!(
  host_id: michael.id,
  title: "Beautiful view overlooking Central Park - Apartment",
  description: "Two bedroom apartment overlooking Central Park. Right in the heart of NYC, minutes from Times Square. This loft is located right near Central Park, Carnegie Hall and most major tourist attraction. It''s the perfect place to enjoy your vacation luxury style.",
  lat: 40.769180,
  lng: -73.984892,  
  street: "270 E 6th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: "10003",
  price: 300.00,
  price_currency: "USD" ,
  property_type: "Apartment",
  price_per_night: "per night",
  additional_fees: 0,
  num_guest: 4,
  num_beds: 2,
  num_baths: 2
)

listing_five = Listing.create!(
  host_id: andrea.id,
  title: "Beautiful view overlooking Central Park - Apartment",
  description: "Good-sized studio apartment in near Union Square, Irving Plaza, and Gramercy Park. The apartment has a private entrance and maintained well",
  lat: 40.735625340903795,   
  lng: -73.99166452444395,  
  street: "55 E 14th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: "10003",
  price: 300.00,
  price_currency: "USD" ,
  property_type: "Studio",
  price_per_night: "per night",
  additional_fees: 0,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

#AWS S3 Photos
# listing_one.photos.attach(io: URI.open('https://yourbnb-active-storage-dev.s3.amazonaws.com/test.jpeg'), filename: "test.jpeg")
