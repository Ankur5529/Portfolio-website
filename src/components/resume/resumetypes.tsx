export interface ResumeEntry {
    school: string;
    date: string;
    degree: string;
    location: string;
    bulletPoints?: string[];
}

export interface ResumeSection {
    title: string;
    entries: ResumeEntry[];
}

export interface ResumeData {
    sections: ResumeSection[];
}