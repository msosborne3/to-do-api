FactoryGirl.define do
  factory :item do
    text { Faker::Lorem.sentence }
    done false
    list_id nil
  end
end