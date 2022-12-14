# <a href="https://airbnb.com" target="_blank">AirBnB clone</a>

- AirBnB clone, is a full-stack, single-page page online marketplace application for lodging that allows users to look for accommodations and make reservations in specific locales. This application was developed using React for front-end and Redux for state management, Ruby on Rails for back-end and PostgresSQL for database management.

## Technologies, Libraries, APIs

- Front-End: React, Redux, jQuery, SCSS
- Back-End: Ruby on Rails, PostgresSQL, AWS S3 (Amazon Simple Storage Services)
- Google Maps Platform Maps and Places

## Features

### User Authentication

- Users are able to sign up, log in, and log out. Users can sign up for a new account by providing first name, last name, email, and password. Upon logging in, users will gain additional features such as make reservations, and provide reviews on listings.

* Sign up/Sign in modal appears when users attempt to do reservations/reviews without being logged in.

### User Account

- Logged in users can view their personal Account Page which displays reviews made by user, name, email, and year of when account was created. User also has the ability to update their profile photo.

### Splash & Listing Page

- Users can view available listings, listing information, listing images on the app on the Splash Page. On click of the listing, users will be redirected to the listing show page which contains all information about the listing including Google Maps Location. Only logged in users can create reservations and reviews.

### Reservations

- Logged in users can make reservations on a listing by providing check-in and check-out dates and number of guests. Users may view all their reservations and have the ability to cancel reservations on the Trips Page.

### Reviews

- Logged in users can create, update, and delete their reviews on a listing.

### Filter Listings

- Users can filter listings by price and/or by up to number of beds.

### Responsive Web Design

## Future Implementations

- Search Listing by location, and dynamically display Google Maps with all available listings.
- Add User's wishlist page
