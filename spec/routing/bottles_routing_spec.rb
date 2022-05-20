require "rails_helper"

RSpec.describe BottlesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/bottles").to route_to("bottles#index")
    end

    it "routes to #show" do
      expect(get: "/bottles/1").to route_to("bottles#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/bottles").to route_to("bottles#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/bottles/1").to route_to("bottles#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/bottles/1").to route_to("bottles#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/bottles/1").to route_to("bottles#destroy", id: "1")
    end
  end
end
