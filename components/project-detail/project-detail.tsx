'use client';

import { Fragment, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Arsenal } from 'next/font/google';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Introduction from '@/components/project-detail/sections/Introduction';
import Agency from '@/components/project-detail/sections/Agency';
import Amenity from '@/components/project-detail/sections/Amenity';
import Cover from '@/components/project-detail/sections/Cover';
import Overview from '@/components/project-detail/sections/Overview';
import Policy from '@/components/project-detail/sections/Policy';
import Production from '@/components/project-detail/sections/Production';
import Siteplan from '@/components/project-detail/sections/Siteplan';
import Timeline from '@/components/project-detail/sections/Timeline';
import Location from '@/components/project-detail/sections/Location';
import Contact from '@/components/project-detail/sections/Contact';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import SectionBreak from '@/components/project-detail/sections/SectionBreak';

const arsenal = Arsenal({
  subsets: ['latin'],
  weight: ['400', '700'], // Chỉ định độ đậm
  style: ['normal', 'italic'], // Thêm kiểu thường và nghiêng
  display: 'swap',
});

export default function ProjectDetail({ project }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = (item: any) => {
    if (item.dropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  /* ---------- Local state ---------- */

  const pathname = usePathname();

  const sections = useMemo(
    () => [
      {
        id: 'introduction',
        content: <Introduction data={project.introduction} />,
        label: 'Giới thiệu',
      },
      { content: <SectionBreak data={project.other.breakImages[0]} /> },
      {
        id: 'overview',
        content: <Overview data={project.overview} />,
        label: 'Tổng quan',
      },
      { content: <SectionBreak data={project.other.breakImages[1]} /> },
      {
        content: <Contact data={project.contact} />,
      },
      {
        id: 'amenity',
        content: <Amenity data={project.amenity} />,
        label: 'Tiện ích',
      },
      { content: <SectionBreak data={project.other.breakImages[2]} /> },
      {
        id: 'location',
        content: <Location data={project.location} />,
        label: 'Vị trí',
      },
      { content: <SectionBreak data={project.other.breakImages[3]} /> },
      {
        id: 'siteplan',
        content: <Siteplan data={project.siteplan} />,
        label: 'Mặt bằng',
      },
      {
        id: 'production',
        content: <Production data={project.production} />,
        label: 'Sản phẩm',
      },
      {
        content: <Contact data={project.contact} />,
      },
      { content: <SectionBreak data={project.other.breakImages[4]} /> },

      {
        id: 'policy',
        content: <Policy data={project.other.policy} />,
        label: 'Chính sách',
      },
      { content: <SectionBreak data={project.other.breakImages[5]} /> },
      {
        id: 'timeline',
        content: <Timeline data={project.other.timeline} />,
        label: 'Tiến độ',
      },
      { content: <SectionBreak data={project.other.breakImages[6]} /> },
      {
        id: 'agency',
        content: <Agency data={project.other.agency} />,
        label: 'Đại lý',
      },
      {
        id: 'toolbar',
        label: 'Công cụ',
        dropdown: [
          {
            href: '/360-view',
            label: '360 view',
          },
          {
            href: '/invitation',
            label: 'Thiệp mời',
          },
        ],
      },
      {
        content: <Contact data={project.contact} />,
      },
    ],
    [project]
  );

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-r from-gray-50 to-white overflow-x-clip',
        arsenal.className
      )}
    >
      {/* ----------------------------------------------------------------------- */}
      {/* Cover - Header IQI                                                      */}
      {/* ----------------------------------------------------------------------- */}
      <Cover data={project.introduction} />

      {/* ----------------------------------------------------------------------- */}
      {/* Header - transparent overlay                                            */}
      {/* ----------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 py-2 shadow-md backdrop-blur">
        <div className="container mx-auto flex h-12 md:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative h-14 w-24 cursor-pointer"
          >
            <Image
              src={
                project.introduction.logoImages[
                  project.introduction.headerLogoIndex
                ]
              }
              alt="Eco Retreat Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden items-center gap-2 md:flex">
            {sections.map(
              (item) =>
                item.label && (
                  <div className="relative group" key={item.id}>
                    <Button
                      variant="ghost"
                      className="text-sm font-bold uppercase p-2 hover:bg-accent hover:text-accent-foreground lg:text-base group/menu"
                      onClick={() => handleLinkClick(item)}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown className="w-4 h-4 transition-all duration-300 group-hover/menu:rotate-180" />
                      )}
                    </Button>
                    {item.dropdown && (
                      <div className="absolute top-full left-0 w-fit bg-background border rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 text-foreground">
                        <div className="py-2">
                          {item.dropdown.map((subnav: any) => (
                            <Link
                              key={subnav.href}
                              href={subnav.href}
                              className="group/item block py-2 px-4"
                            >
                              <p className="font-bold text-nowrap uppercase group-hover/item:text-orange-500">
                                {subnav.label}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
            )}
          </nav>

          {/* Mobile Menu Button (Hidden on Desktop) */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu (Appears when isMenuOpen is true) */}
        {isMenuOpen && (
          <nav className="absolute left-0 top-full flex w-full flex-col border-t bg-background p-4 shadow-lg md:hidden">
            {sections.map(
              (item) =>
                item.label && (
                  <div key={`mobile-${item.id}`}>
                    <Button
                      variant="ghost"
                      className="justify-start p-4 text-base font-semibold"
                      onClick={() => handleLinkClick(item)}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={cn('w-4 h-4 transition-all duration-300', {
                            'rotate-180': isDropdownOpen,
                          })}
                        />
                      )}
                    </Button>
                    {item.dropdown && isDropdownOpen && (
                      <div className="pl-6 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        {item.dropdown.map((subnav: any) => (
                          <Link
                            key={subnav.href}
                            href={subnav.href}
                            className="block text-gray-600 py-2 text-sm font-bold"
                          >
                            {subnav.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
          </nav>
        )}
      </header>

      {/* ----------------------------------------------------------------------- */}
      {/* Conditional sections                                                    */}
      {/* ----------------------------------------------------------------------- */}
      {sections.map(
        (section, idx) =>
          section.content && (
            <Fragment key={section.id || idx}>{section.content}</Fragment>
          )
      )}
    </div>
  );
}
