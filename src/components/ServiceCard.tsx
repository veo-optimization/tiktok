import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration?: string;
  includes?: string[];
  href: string;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  includes,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {duration && (
          <p className="mt-1 text-sm text-gray-500">
            Тривалість: {duration}
          </p>
        )}
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-primary-600">
            {price.toLocaleString()} грн
          </span>
        </div>
        {includes && includes.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Включає:</h4>
            <ul className="mt-2 space-y-2">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-500 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-6">
          <Link
            href={href}
            className="block w-full bg-primary-600 text-white text-center py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
          >
            Детальніше
          </Link>
        </div>
      </div>
    </div>
  );
} 