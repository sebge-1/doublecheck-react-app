class Sentence < ApplicationRecord
  belongs_to :project
  has_many :tones, as: :analyzable
  accepts_nested_attributes_for :tones
end
