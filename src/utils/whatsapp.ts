import { COMPANY_INFO } from '../data/companyData';

export function getWhatsAppUrl(customMessage?: string): string {
  const base = `https://wa.me/${COMPANY_INFO.whatsappNumber}`;
  const defaultMsg = `Hello Sannidhanam Earth Movers, I would like to enquire about your heavy machinery rental and services.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `${base}?text=${text}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello Sannidhanam Earth Movers, I am interested in your service: *${serviceTitle}*. Please share availability, rates, and machinery options for my project.`;
  return getWhatsAppUrl(message);
}

export function getMachineryWhatsAppUrl(machineName: string, model: string): string {
  const message = `Hello Sannidhanam Earth Movers, I want to check availability and hire rates for: *${machineName} (${model})*. Please share rental terms and mobilization time.`;
  return getWhatsAppUrl(message);
}

export function getMaterialWhatsAppUrl(materialName: string, units?: string): string {
  const message = `Hello Sannidhanam Earth Movers, I need a quote for building materials: *${materialName}*${units ? ` (${units})` : ''} delivery to my site. Please provide rates and delivery schedule.`;
  return getWhatsAppUrl(message);
}

export function getProjectWhatsAppUrl(projectTitle: string): string {
  const message = `Hello Sannidhanam Earth Movers, I saw your project *${projectTitle}* on your website and would like to discuss a similar requirement for my site.`;
  return getWhatsAppUrl(message);
}

