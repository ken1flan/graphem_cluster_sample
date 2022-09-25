class Article < ApplicationRecord
  validates :title, presence: true, graphem_cluster_length: { maximum: 20 }, length: { maximum: 255 }
  validates :body, presence: true, graphem_cluster_length: { maximum: 1_000 }, length: { maximum: 10_000 }
end
