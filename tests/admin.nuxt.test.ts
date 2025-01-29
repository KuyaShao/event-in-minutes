import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import Admin from "~/pages/admin/index.vue";

// Mock the router
const mockPush = vi.fn();
vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("Admin Dashboard", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Admin, {
      global: {
        stubs: ["NuxtLink"], // Stub NuxtLink to prevent navigation errors
      },
    });
  });

  it("renders the admin dashboard correctly", () => {
    expect(wrapper.find("h1").text()).toBe("Admin Dashboard");
    expect(wrapper.find("p").text()).toBe("Welcome, Admin!");
  });

  it("navigates to create post page when 'Create New Post' button is clicked", async () => {
    await wrapper.find("button:nth-of-type(1)").trigger("click");
    expect(mockPush).toHaveBeenCalledWith("/admin/create-post");
  });

  it("navigates to corporate events categories when button is clicked", async () => {
    await wrapper.find("button:nth-of-type(2)").trigger("click");
    expect(mockPush).toHaveBeenCalledWith("/admin/categories/CorporateEvents");
  });
});
