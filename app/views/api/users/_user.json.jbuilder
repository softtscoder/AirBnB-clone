json.extract! user, :id, :first_name, :last_name, :email, :created_at

json.profilePhotoUrl url_for(user.profile_photo) if user.profile_photo.attached?
json.userReviews user.reviews
# json.listings user.listings
# json.reservationIds user.reservations.pluck(:id)