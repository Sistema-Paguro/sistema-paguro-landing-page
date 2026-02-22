import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export interface Country {
    name: string;
    code: string; // ISO 2-letter
    dial_code: string;
    emoji: string;
}

// A truncated list for demo purposes, representing major LATAM and other key countries.
export const countries: Country[] = [
    { "name": "Afghanistan", "code": "AF", "emoji": "🇦🇫", "dial_code": "+93" },
    { "name": "Argentina", "code": "AR", "emoji": "🇦🇷", "dial_code": "+54" },
    { "name": "Australia", "code": "AU", "emoji": "🇦🇺", "dial_code": "+61" },
    { "name": "Austria", "code": "AT", "emoji": "🇦🇹", "dial_code": "+43" },
    { "name": "Belgium", "code": "BE", "emoji": "🇧🇪", "dial_code": "+32" },
    { "name": "Bolivia", "code": "BO", "emoji": "🇧🇴", "dial_code": "+591" },
    { "name": "Brazil", "code": "BR", "emoji": "🇧🇷", "dial_code": "+55" },
    { "name": "Canada", "code": "CA", "emoji": "🇨🇦", "dial_code": "+1" },
    { "name": "Chile", "code": "CL", "emoji": "🇨🇱", "dial_code": "+56" },
    { "name": "Colombia", "code": "CO", "emoji": "🇨🇴", "dial_code": "+57" },
    { "name": "Costa Rica", "code": "CR", "emoji": "🇨🇷", "dial_code": "+506" },
    { "name": "Cuba", "code": "CU", "emoji": "🇨🇺", "dial_code": "+53" },
    { "name": "Dominican Republic", "code": "DO", "emoji": "🇩🇴", "dial_code": "+1" },
    { "name": "Ecuador", "code": "EC", "emoji": "🇪🇨", "dial_code": "+593" },
    { "name": "El Salvador", "code": "SV", "emoji": "🇸🇻", "dial_code": "+503" },
    { "name": "Guatemala", "code": "GT", "emoji": "🇬🇹", "dial_code": "+502" },
    { "name": "Honduras", "code": "HN", "emoji": "🇭🇳", "dial_code": "+504" },
    { "name": "Mexico", "code": "MX", "emoji": "🇲🇽", "dial_code": "+52" },
    { "name": "Nicaragua", "code": "NI", "emoji": "🇳🇮", "dial_code": "+505" },
    { "name": "Panama", "code": "PA", "emoji": "🇵🇦", "dial_code": "+507" },
    { "name": "Paraguay", "code": "PY", "emoji": "🇵🇾", "dial_code": "+595" },
    { "name": "Peru", "code": "PE", "emoji": "🇵🇪", "dial_code": "+51" },
    { "name": "Puerto Rico", "code": "PR", "emoji": "🇵🇷", "dial_code": "+1" },
    { "name": "Spain", "code": "ES", "emoji": "🇪🇸", "dial_code": "+34" },
    { "name": "United States", "code": "US", "emoji": "🇺🇸", "dial_code": "+1" },
    { "name": "Uruguay", "code": "UY", "emoji": "🇺🇾", "dial_code": "+598" },
    { "name": "Venezuela", "code": "VE", "emoji": "🇻🇪", "dial_code": "+58" }
];

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onPhoneChange?: (fullNumber: string) => void;
    defaultCountryCode?: string;
}

export function PhoneInput({ className, defaultCountryCode = 'CO', onPhoneChange, ...props }: PhoneInputProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<Country>(
        countries.find(c => c.code === defaultCountryCode) || countries[9] // Fallback to CO
    );
    const [phoneNumber, setPhoneNumber] = useState('');

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.dial_code.includes(search)
    );

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        setSearch('');
        updateFullNumber(country.dial_code, phoneNumber);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneNumber(value);
        updateFullNumber(selectedCountry.dial_code, value);
    };

    const updateFullNumber = (dialCode: string, number: string) => {
        if (onPhoneChange) {
            onPhoneChange(`${dialCode} ${number}`);
        }
    };

    return (
        <div className="relative w-full group" ref={dropdownRef}>
            {/* Hidden input to pass the combined payload cleanly in forms if needed */}
            <input type="hidden" name={props.name} value={`${selectedCountry.dial_code} ${phoneNumber}`} />

            <div className={`flex items-center w-full px-1 py-1 bg-[#0f111a]/80 outline-none border border-white/10 rounded-[14px] transition-all shadow-sm focus-within:border-cyan-500/50 ${className || ''}`}>

                {/* Country Selector Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 pl-3 pr-2 py-2 text-white bg-transparent hover:bg-white/5 rounded-xl transition-colors focus:outline-none shrink-0 border border-white/5 mx-1"
                >
                    <img
                        src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png 2x`}
                        alt={selectedCountry.name}
                        className="w-5 rounded-[2px]"
                    />
                    <span className="text-sm font-bold uppercase">{selectedCountry.code}</span>
                    <span className="text-xs text-gray-400 font-medium ml-1">{selectedCountry.dial_code}</span>
                    <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ml-1 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Input Field */}
                <input
                    {...props}
                    type="tel"
                    name={undefined} // Handled by hidden input
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="(300) 000-0000"
                    className="flex-1 bg-transparent border-none text-white px-3 py-2 outline-none placeholder:text-gray-600 font-medium tracking-wide w-full min-w-0"
                />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-80 bg-[#0d1017] border border-white/10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] z-50 overflow-hidden flex flex-col max-h-80 animate-in fade-in slide-in-from-top-2 duration-200">

                    <div className="p-3 border-b border-white/5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="w-4 h-4 text-gray-500" />
                            </div>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search country..."
                                className="w-full bg-[#151923] border border-white/5 rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-500/50 transition-colors"
                                autoFocus
                            />
                        </div>
                    </div>

                    <div className="overflow-y-auto overflow-x-hidden p-2 flex-col space-y-1 custom-scrollbar">
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                                <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => handleCountrySelect(country)}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors hover:bg-white/5 ${selectedCountry.code === country.code ? 'bg-[#1a202c] text-white' : 'text-gray-300'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                            srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                                            alt={country.name}
                                            className="w-5 rounded-[2px]"
                                        />
                                        <span className="font-medium">{country.name}</span>
                                    </div>
                                    <span className="text-cyan-500/80 font-medium">{country.dial_code}</span>
                                </button>
                            ))
                        ) : (
                            <div className="px-3 py-4 text-center text-sm text-gray-500">
                                No countries found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
