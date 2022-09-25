class GraphemClusterLengthValidator < ActiveModel::Validations::LengthValidator
  def validate_each(record, attribute, value)
    original = value.dup

    value.instance_eval do
      def length
        grapheme_clusters.to_a.size
      end
    end

    ret = super
    value = original.dup

    ret
  end
end
