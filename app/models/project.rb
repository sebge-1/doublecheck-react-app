class Project < ApplicationRecord
  has_many :tones, as: :analyzable
  has_many :sentences
  accepts_nested_attributes_for :tones, :sentences
end
