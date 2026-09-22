<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use App\Models\TourPackage;
use App\Models\UmrahPackage;
use App\Models\Visa;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            'site_name' => 'Rozana Tours & Travels',
            'whatsapp_number' => '966552993899',
            'phone_primary' => '+966 55 299 3899',
            'phone_secondary' => '+966 53 188 0016',
            'email' => 'info@rozana-tours.com',
            'address' => 'Umm Al Hamam St., Umm Al Hamam Al Sharqi Dist., Riyadh, Saudi Arabia',
            'hero_badge' => 'Premier Saudi Arabia Travel & Visa Consultancy',
            'hero_title' => 'Your Gateway To',
            'hero_highlight' => 'Seamless Global Travel',
            'hero_description' => 'Experience hassle-free worldwide visa processing, bespoke luxury tour packages, and first-class flight bookings crafted with perfection for Saudi travelers.',
            'visa_heading' => 'Seamless Visa Assistance for Saudi Residents',
            'visa_description' => 'We handle everything from document translation and embassy appointment slots to form filling.',
            'packages_heading' => 'Handcrafted Tour Packages For You',
            'packages_description' => 'Curated travel experiences with flights, quality hotels, guided tours, and dedicated support.',
            'umrah_heading' => 'Bespoke VIP Umrah Packages',
            'umrah_description' => 'Perform your pilgrimage with complete peace of mind, premium hotels, private transfers, and Nusuk concierge.',
        ];
        foreach ($settings as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        $visas = [
            ['schengen', 'Schengen (Europe)', 'https://flagcdn.com/w80/eu.png', 'europe', true, '3 - 5 Working Days', 'Up to 90 Days / Multi-Entry', '450 SAR', 'Travel freely across 29 European countries including France, Italy, Germany, and Spain.', ['Original Passport (Valid 6+ months)', 'Saudi ID / Iqama Copy', '2 White Background Photos (3.5 x 4.5cm)', '3-Month Bank Statement', 'Flight & Hotel Bookings (Provided by Us)']],
            ['uk', 'United Kingdom (EVW & Standard)', 'https://flagcdn.com/w80/gb.png', 'europe', true, '24 - 48 Hours (EVW)', '6 Months / 2 to 5 Years', '380 SAR', 'Fast-track electronic visa waiver or standard visitor visa for London and UK cities.', ['Passport Copy (High Resolution)', 'Saudi Iqama / National ID', 'Travel Dates & Flight Details', 'No Bank Statement needed for EVW']],
            ['usa', 'United States (B1/B2 Tourist)', 'https://flagcdn.com/w80/us.png', 'americas', false, '5 - 7 Working Days (Appt)', '10 Years Multi-Entry', '650 SAR', 'Long-term tourist and business visa assistance for travel across the USA.', ['DS-160 Confirmation Page', 'Original Passport', 'US Visa Specification Photo', 'Appointment Slot Booking', 'Bank Statement & Salary Certificate']],
            ['japan', 'Japan (e-Visa / Tourist)', 'https://flagcdn.com/w80/jp.png', 'asia', true, '3 - 4 Working Days', '90 Days Single / Multi', '350 SAR', 'Hassle-free e-Visa application for Tokyo, Kyoto, and Japan vacations.', ['Passport Copy', 'Iqama / Saudi National ID', 'Recent Bank Statement', 'Hotel Reservation']],
            ['turkey', 'Turkey (e-Visa & Sticker)', 'https://flagcdn.com/w80/tr.png', 'asia', false, 'Same Day (Instant)', '180 Days Multiple Entry', '280 SAR', 'Instant e-Visa issuing for Istanbul, Cappadocia, and Antalya trips.', ['Passport Copy', 'Flight Ticket Confirmation', 'Email address for instant PDF receipt']],
            ['canada', 'Canada (V-1 Tourist)', 'https://flagcdn.com/w80/ca.png', 'americas', false, '10 - 15 Working Days', 'Up to 10 Years (Passport Expiry)', '590 SAR', 'Long-term visitor visa assistance for Canada travel and family visits.', ['Passport Copy', 'Biometrics Appointment Scheduling', 'Financial Proof / Bank Statement', 'Employment Letter']],
        ];
        foreach ($visas as $order => $v) {
            Visa::updateOrCreate(['slug' => $v[0]], ['country' => $v[1], 'flag_url' => $v[2], 'category' => $v[3], 'popular' => $v[4], 'processing_time' => $v[5], 'validity' => $v[6], 'price' => $v[7], 'description' => $v[8], 'requirements' => $v[9], 'active' => true, 'sort_order' => $order]);
        }

        $packages = [
            ['maldives', 'Maldives Paradise & Overwater Villa', 'Maldives Islands', 'https://flagcdn.com/w40/mv.png', 'tropical', '5 Days / 4 Nights', '4,750 SAR', 4.9, 184, 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80', true, ['5-Star Resort', 'Private Speedboat', 'Daily Breakfast', 'Seaplane Flight'], [['day' => 'Day 1', 'detail' => 'Arrival at Male Airport and private transfer to the resort.'], ['day' => 'Day 2-4', 'detail' => 'Island experiences, snorkeling, spa, and leisure.'], ['day' => 'Day 5', 'detail' => 'Breakfast and transfer to the airport.']]],
            ['switzerland', 'Swiss Alps & Interlaken Luxury Escape', 'Zurich & Interlaken, Switzerland', 'https://flagcdn.com/w40/ch.png', 'europe', '7 Days / 6 Nights', '6,800 SAR', 5.0, 210, 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80', true, ['Roundtrip Flights', 'Alpine Train Pass', 'Luxury Chalet Hotel', 'Lake Thun Cruise'], [['day' => 'Day 1-2', 'detail' => 'Arrive in Zurich and travel to Interlaken.'], ['day' => 'Day 3-6', 'detail' => 'Alpine excursions, lake cruise, and Zurich shopping.'], ['day' => 'Day 7', 'detail' => 'Breakfast and airport transfer.']]],
            ['paris', 'Parisian Romance & Fashion Tour', 'Paris, France', 'https://flagcdn.com/w40/fr.png', 'europe', '6 Days / 5 Nights', '5,400 SAR', 4.9, 142, 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80', false, ['Eiffel Tower VIP Access', 'Louvre Museum Pass', 'Seine Dinner Cruise', '4-Star Boutique Hotel'], [['day' => 'Day 1', 'detail' => 'Arrival and private hotel transfer.'], ['day' => 'Day 2-5', 'detail' => 'Paris landmarks, Versailles, shopping, and Seine cruise.'], ['day' => 'Day 6', 'detail' => 'Breakfast and departure transfer.']]],
            ['bali', 'Bali Exotic Jungle & Beach Villa', 'Ubud & Seminyak, Indonesia', 'https://flagcdn.com/w40/id.png', 'tropical', '6 Days / 5 Nights', '3,100 SAR', 4.5, 98, 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', false, ['Private Pool Villa', 'Floating Breakfast', 'Waterfalls Tour', 'Private Car Chauffeur'], [['day' => 'Day 1', 'detail' => 'Arrival and private transfer to Ubud.'], ['day' => 'Day 2-5', 'detail' => 'Rice terraces, waterfalls, island tour, and Seminyak.'], ['day' => 'Day 6', 'detail' => 'Spa morning and airport drop-off.']]],
            ['dubai', 'Dubai Luxury Skyline & Desert Safari', 'Dubai, UAE', 'https://flagcdn.com/w40/ae.png', 'arabian', '4 Days / 3 Nights', '2,900 SAR', 4.9, 310, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', true, ['Burj Khalifa At The Top', 'VIP Desert Safari', 'Yacht Cruise', '5-Star Hotel'], [['day' => 'Day 1', 'detail' => 'Airport arrival and private hotel transfer.'], ['day' => 'Day 2-3', 'detail' => 'Burj Khalifa, desert safari, and Dubai experiences.'], ['day' => 'Day 4', 'detail' => 'Yacht cruise and departure.']]],
            ['bosnia', 'Bosnia Nature & Lakes Expedition', 'Sarajevo & Mostar, Bosnia', 'https://flagcdn.com/w40/ba.png', 'europe', '7 Days / 6 Nights', '4,100 SAR', 4.5, 165, 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80', false, ['Direct Flights', 'Private SUV Driver', 'Halal Dining Included', 'Kravice Waterfalls'], [['day' => 'Day 1-2', 'detail' => 'Sarajevo arrival and Old Town tour.'], ['day' => 'Day 3-6', 'detail' => 'Mostar, waterfalls, lake village, and shopping.'], ['day' => 'Day 7', 'detail' => 'Airport transfer and return flight.']]],
        ];
        foreach ($packages as $order => $p) {
            TourPackage::updateOrCreate(['slug' => $p[0]], ['title' => $p[1], 'location' => $p[2], 'flag_url' => $p[3], 'category' => $p[4], 'duration' => $p[5], 'price' => $p[6], 'rating' => $p[7], 'reviews' => $p[8], 'image_url' => $p[9], 'popular' => $p[10], 'inclusions' => $p[11], 'itinerary' => $p[12], 'active' => true, 'sort_order' => $order]);
        }

        $umrah = [
            ['vip-executive', 'VIP Executive Umrah Experience', 'Fairmont Clock Tower (Kaaba View)', 'The Oberoi Madinah', '5 Days / 4 Nights', '3,500 SAR', 5.0, true, 'Private VIP Mercedes / GMC Yukon', ['Direct Front Haram / Kaaba View Suite', 'Daily 5-Star Open Buffet Breakfast', 'Private Chauffeur Airport & Haram Transfers', 'Nusuk Permit & Fast-Track Assistance', 'Guided Historical Ziyarat Tours']],
            ['premium-family', 'Premium Family Umrah Package', 'Swissôtel Makkah', 'Pullman Zamzam Madinah', '7 Days / 6 Nights', '2,950 SAR', 4.9, false, 'Private Family SUV Transfer', ['Connecting Family Suites near Haram', 'Daily Breakfast Included', 'Makkah - Madinah VIP Train / Car', 'Ziyarat in Makkah', '24/7 Dedicated Arabic & English Guide']],
            ['weekend-express', 'Weekend Express Umrah', 'Pullman Makkah Clock Royal', 'Day Tour (Optional)', '3 Days / 2 Nights', '1,750 SAR', 4.8, false, 'Airport Pick-up & Drop-off', ['Steps away from King Abdulaziz Gate', 'Express Check-in Service', 'Roundtrip Jeddah Airport Transfer', 'Nusuk Rawdah Slot Support']],
        ];
        foreach ($umrah as $order => $p) {
            UmrahPackage::updateOrCreate(['slug' => $p[0]], ['title' => $p[1], 'makkah_hotel' => $p[2], 'madinah_hotel' => $p[3], 'duration' => $p[4], 'price' => $p[5], 'rating' => $p[6], 'popular' => $p[7], 'transport' => $p[8], 'inclusions' => $p[9], 'active' => true, 'sort_order' => $order]);
        }
    }
}
