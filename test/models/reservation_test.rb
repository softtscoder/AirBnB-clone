# == Schema Information
#
# Table name: reservations
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  listing_id     :integer          not null
#  check_in_date  :datetime         not null
#  check_out_date :datetime         not null
#  num_guests     :integer          not null
#  payment        :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
