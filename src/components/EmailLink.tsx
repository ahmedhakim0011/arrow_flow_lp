import { CONTACT_EMAIL } from '@/config';
export const EmailLink = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
