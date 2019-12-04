# == Schema Information
#
# Table name: events
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  info          :string           not null
#  event_city    :string           not null
#  event_state   :string           not null
#  event_zipcode :string           not null
#  event_country :string           not null
#  type          :string           not null
#  start_time    :time             not null
#  date          :date             not null
#  phone         :string           not null
#  skill_level   :string           not null
#  rating        :integer          default("0"), not null
#  address       :string           not null
#  capacity      :integer          not null
#  cost          :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
