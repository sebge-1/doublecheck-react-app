class ToneSerializer < ActiveModel::Serializer
  attributes :id, :score, :tone_name
  belongs_to :analyzable, polymorphic: true
end
