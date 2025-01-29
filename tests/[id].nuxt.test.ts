import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount, RouterLinkStub, flushPromises } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import { h, defineComponent, Suspense } from "vue"; // Import Suspense
import Id from "~/pages/article/[id].vue";

// Mock article data
const mockArticle = {
  category: { name: "Tech" },
  title: "Test Article Title",
  author: { name: "John Doe" },
  date: "2025-01-01",
  img: "/test-image.jpg",
  content: "This is the content of the article.",
};

// Mock Nuxt `useAsyncData`
vi.mock("nuxt/app", () => ({
  useAsyncData: vi.fn(),
}));

describe("Article Component (SSG)", () => {
  let wrapper;
  let router;

  beforeEach(async () => {
    router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: "/article/:id", component: Id }],
    });

    await router.push("/article/1");
    await router.isReady();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders article details correctly", async () => {
    vi.spyOn(await import("nuxt/app"), "useAsyncData").mockResolvedValue({
      data: mockArticle,
      error: null,
    });

    // ✅ Wrap the component in `<Suspense>`
    const SuspendedComponent = defineComponent({
      render() {
        return h(Suspense, null, { default: () => h(Id) });
      },
    });

    wrapper = mount(SuspendedComponent, {
      global: {
        plugins: [router],
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      },
    });

    await flushPromises();

    expect(wrapper.find('[data-testid="category"]').text()).toBe(
      mockArticle.category.name
    );
    expect(wrapper.find('[data-testid="title"]').text()).toBe(
      mockArticle.title
    );
    expect(wrapper.find('[data-testid="author"]').text()).toBe(
      mockArticle.author.name
    );
    expect(wrapper.find('[data-testid="published"]').text()).toContain(
      "January 1, 2025"
    );
  });

  it("shows error message when article fetch fails", async () => {
    vi.spyOn(await import("nuxt/app"), "useAsyncData").mockResolvedValue({
      data: null,
      error: new Error("API error"),
    });

    // ✅ Wrap the component in `<Suspense>`
    const SuspendedComponent = defineComponent({
      render() {
        return h(Suspense, null, { default: () => h(Id) });
      },
    });

    wrapper = mount(SuspendedComponent, {
      global: {
        plugins: [router],
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      },
    });

    await flushPromises();

    expect(wrapper.find(".error-message").text()).toContain(
      "Oops! We couldn't fetch the article."
    );
  });
});
