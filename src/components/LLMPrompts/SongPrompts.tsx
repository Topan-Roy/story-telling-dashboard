import React from 'react';
import SideBar from '../ui/SideBar';
import AdminHeader from '../ui/AdminHeader';
import PromptTabs from './PromptTabs';
export default function SongPrompts() {
  return (
    <div className="flex items-start justify-center bg-[#F9F9F9]">
      <SideBar />
      <div className='w-full pb-4'>
        <AdminHeader />
        <div className="mt-6 px-6">
          <PromptTabs />
          <div className="">
            <div className="flex items-start justify-between mb-6">
              <div className='mt-8'>
                <h1 className="text-xl font-semibold text-[#111827] mb-1">
                  Song Prompt Management
                </h1>
                <p className="text-sm text-[#4B5563]">
                  View and manage all your Song Master Prompts
                </p>
              </div>
              <button className="flex items-center gap-2 mt-4  bg-gradient-to-r from-[#9458E8] via-[#A43EE7] to-[#CA00E5] text-white px-4 py-2 rounded-lg text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3.5V12.5M3.5 8H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Add Prompt
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-[#4B5563]">
                    SYSTEM PROMPT:
                  </h2>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M11.333 2L14 4.667l-9.333 9.333H2v-2.667L11.333 2z" stroke="#9333EA" strokeWidth="1.2"/>
                      </svg>
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 4h12M6.5 7v5M9.5 7v5M3 4l1 9.5A1.5 1.5 0 005.5 15h5a1.5 1.5 0 001.5-1.5L13 4" stroke="#EF4444" strokeWidth="1.2"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  You are Koko, a friendly, imaginative, and talented master singer-songwriter who creates fun, positive, and age-appropriate songs for children. Your purpose is to craft a unique, personalized, and memorable song experience using the details provided by the user.
                </p>
             <div>
                  <h3 className="text-sm font-semibold text-[#4B5563] mb-3">Creative Process</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-[#4B5563] mb-1.5">Step 1 – Character & Story Foundation</p>
                      <ul className="list-disc pl-5 space-y-1 text-[#4B5563] leading-relaxed">
                        <li>Use (child_name) (when provided) as the main character; if given, otherwise, create a suitable, age-appropriate character.</li>
                        <li>Build a simple story or adventure that reflects the (theme) through actions and discovery, not direct moral statements.</li>
                        <li>The story must have a positive or uplifting outcome.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-[#4B5563] mb-1.5">Step 2 – Genre & Tone Adaptation</p>
                      <ul className="list-disc pl-5 space-y-1 text-[#4B5563] leading-relaxed">
                        <li>Adapt (song_type) to be fun, safe, and child-friendly.</li>
                        <li>"Spooky" = playful mystery, not fear.</li>
                        <li>"Adventure" = exploration and teamwork, not danger.</li>
                        <li>Keep rhythm, rhyme, and structure suited to a song lasting about (song_length_minutes) minutes (±15 seconds).</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1.5">Step 3 – Integrate All Elements</p>
                      <ul className="list-disc pl-5 space-y-1 text-[#4B5563] leading-relaxed">
                        <li>Naturally weave every element from (characters_list), (places_list), and (items_list) into a coherent narrative-song.</li>
                        <li>Ensure all appear in ways that make sense within the lyrics.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-[#4B5563] mb-1.5">Step 4 – Age & Language Filtering</p>
                      <ul className="list-disc pl-5 space-y-1 text-[#4B5563] leading-relaxed">
                        <li>All lyrics must match the understanding level of a (age)-year-old child.</li>
                        <li>Use simple, melodic, and cheerful phrasing.</li>
                        <li>Avoid sarcasm, negativity, or complex metaphors.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-[#4B5563] mb-1.5">Step 5 – Positive & Safe Content Rules (Prime Directive)</p>
                      <ul className="list-disc pl-5 space-y-1 text-[#4B5563] leading-relaxed">
                        <li>Absolutely exclude all words in (excluded_words_list), including variations.</li>
                        <li>Conflicts must always be resolved with creativity, teamwork, or kindness.</li>
                        <li>No real-world threats, violence, or fear. Focus on imagination, fun, and discovery.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-[#4B5563] mb-1.5">Step 6 – Title & Cover Art (Standard Output)</p>
                      <ul className="list-disc pl-5 space-y-1 text-[#4B5563] leading-relaxed">
                        <li>Create a short, catchy, child-appropriate song title.</li>
                        <li>Generate a vivid image describing a bright, imaginative cover that matches the song's theme, characters, and setting.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-[#4B5563] mb-1.5">Final Style Notes</p>
                      <ul className="list-disc pl-5 space-y-1 text-[#4B5563] leading-relaxed">
                        <li>Write as Koko, a warm, imaginative musical companion.</li>
                        <li>Every song should be positive, rhythmic, emotionally engaging, and suitable for the given age.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}