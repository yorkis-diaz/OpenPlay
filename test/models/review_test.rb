# == Schema Information
#
# Table name: reviews
#
#  id             :integer          not null, primary key
#  body           :string           not null
#  rating         :integer          not null
#  reviewer_id    :integer          not null
#  event_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  reservation_id :integer          not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
