# == Schema Information
#
# Table name: listings
#
#  id              :bigint           not null, primary key
#  host_id         :integer          not null
#  title           :string           not null
#  description     :text             not null
#  lat             :float            not null
#  lng             :float            not null
#  street          :string           not null
#  city            :string           not null
#  state           :string           not null
#  country         :string           not null
#  zip_code        :integer          not null
#  price           :float            not null
#  price_currency  :string           default("USD"), not null
#  price_per_night :string           default("per night"), not null
#  additional_fees :float            default(0.0), not null
#  property_type   :string           not null
#  num_guest       :integer          not null
#  num_beds        :integer          not null
#  num_baths       :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
