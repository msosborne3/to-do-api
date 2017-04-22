FactoryGirl.define do
  factory :item do
    name { Faker:Lorem.sentence }
    done false
    list_id nil
  end
end