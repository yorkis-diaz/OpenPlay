# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  body        :string           not null
#  rating      :integer          not null
#  reviewer_id :integer          not null
#  event_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
end
