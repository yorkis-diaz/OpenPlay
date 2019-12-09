# == Schema Information
#
# Table name: saved_events
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SavedEventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
