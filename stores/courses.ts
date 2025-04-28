import type { Course } from "~/types/course.types";
import { useDirectus } from "~~/composables/useDirectus";

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    courses: [] as Course[],
    error: null as string | null,
    isLoading: false,
  }),
  actions: {
    async fetchCourses() {
      this.isLoading = true;
      try {
        const directus = useDirectus() as any;
        const { success, data, error } = await directus.getResponse({
          url: '/items/courses',
        });
        
        if (success) {
          this.courses = data.data as Course[];
        } else {
          console.error('Directus error:', error);
          this.error = error;
        }
      } catch (e) {
        console.error('Unexpected error:', e);
        this.error = e as string;
      } finally {
        this.isLoading = false;
      }
    }
  }
})