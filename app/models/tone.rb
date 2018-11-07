class Tone < ApplicationRecord
  belongs_to :analyzable, polymorphic: true
end
