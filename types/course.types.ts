
enum CourseStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
}

export interface Course {
    id:                number;
    status:            CourseStatus;
    sort:              null;
    user_created:      string;
    date_created:      Date;
    user_updated:      string;
    date_updated:      Date;
    title:             string;
    short_description: string;
    description:       string;
    image:             string;
    duration:          string;
    students:          string;
    rating:            string;
    price:             number;
    old_price:         number;
    slug:              string;
    presentation?:     string;
}