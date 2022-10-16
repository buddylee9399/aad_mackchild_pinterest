class Pin < ApplicationRecord
	acts_as_votable
	belongs_to :user

  has_one_attached :image do |attachable|
    attachable.variant :medium, resize_to_limit: [300, 300]
  end
	# has_attached_file :image, :styles => { :medium => "300x300>" }
  # validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
