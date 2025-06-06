# AMI Boston Site Completion - Execution Plan

## Overview
This plan combines implementation prompts 7-15 with site-review action matrix items, prioritized to avoid site-breaking changes. Execute in order for systematic completion.

## PHASE 1: SAFE CONTENT UPDATES (Non-Site-Breaking)

### 1. Update Existing Content (High Priority)
- **Task**: Update Guiding Questions in theme section
- **Action**: Replace questions 4 & 5 with "90-Day Learning Sprints" and "Energy Abundance/Redefined Need"
- **File**: `src/App.tsx` lines ~190-194
- **Status**: ✅ Copy updated, needs implementation

### 2. Expand Inner Technologies Section  
- **Task**: Add 83% stat to Inner Technologies guiding question
- **Action**: Update question 6 to include "(83% of public LLM use = self-help/therapy)"
- **File**: `src/App.tsx` line ~195
- **Status**: Pending

### 3. Add Inter-Generational Loom Subsection
- **Task**: Add new subsection after theme pillars, before guiding questions
- **Content**: "Students ↔ Seasoned Innovators" section with Peer-Mentor Rings mention
- **File**: `src/App.tsx` after line ~185
- **Status**: Pending

### 4. Add Virtual On-Ramp Banner
- **Task**: Insert banner section after theme, before schedule  
- **Content**: Bob Johansson 12 Jun 2025 webinar info
- **File**: `src/App.tsx` after theme section
- **Status**: Pending

### 5. Update Venue Cards with Room Rates
- **Task**: Add room rate info to all hotel cards in venues section
- **Content**: "$239-$289 + Negotiations start Jul 2025" for each venue
- **File**: `src/App.tsx` venues section (lines ~400-737)
- **Status**: High priority

### 6. Add Algorithmic Justice Sandbox to Schedule
- **Task**: Add to Thursday afternoon activities
- **File**: `src/App.tsx` schedule table (line ~228)
- **Status**: Pending

## PHASE 2: NEW SECTIONS (Non-Site-Breaking)

### 7. Budget Section (Prompt 7)
- **Location**: After venues section, before any footer content
- **Content**: Fee structure, headcount, income projections, cost allocations
- **Format**: Clean bullet points with bold labels
- **File**: `src/App.tsx` new section
- **Status**: Pending

### 8. Risk Matrix & Optional Upgrades  
- **Location**: Within budget section
- **Content**: 3x3 matrix (Tight/Within/Stretch) + upgrade options list
- **Format**: Table + bullet list
- **Status**: Pending (part of budget section)

### 9. Activities Section (Prompt 8)
- **Location**: After theme section, before schedule
- **Content**: Bullet list of key meeting activities
- **Format**: Bold titles + descriptions
- **File**: `src/App.tsx` new section
- **Status**: Pending

### 10. Premise/Blue Block (Prompt 9)  
- **Location**: After hero, before theme section
- **Content**: Highlighted quote/premise with blue background
- **Format**: Blockquote style with contrast text
- **File**: `src/App.tsx` new section
- **Status**: Pending

### 11. Access & Confidence Chips (Prompt 13)
- **Location**: Near end, before footer/budget
- **Content**: Two chips - "Access" and "Confidence" 
- **Format**: Styled pill/capsule components
- **File**: `src/App.tsx` new section
- **Status**: Pending

### 12. Access Likelihood Chips for Labs
- **Location**: Within existing labs section
- **Content**: Add "✅ 90%" type indicators to lab cards
- **File**: `src/App.tsx` labs section modification
- **Status**: Medium priority

## PHASE 3: SPEAKER & TIMELINE CONTENT

### 13. Speaker Highlights Section (Prompt 12)
- **Location**: After activities, before schedule
- **Content**: Cards for Bob Johansson, Zai Narimani, Mark Stevens (placeholder content)
- **Format**: Photo + name + title cards in grid
- **File**: `src/App.tsx` new section  
- **Status**: Pending (needs speaker details)

### 14. Enhanced Schedule Updates
- **Task**: Keep existing table, enhance with new activities
- **Updates**: Add Virtual On-Ramp reference, Algorithmic Justice Sandbox
- **File**: `src/App.tsx` schedule section updates
- **Status**: Pending

### 15. Footer Media Timeline (Prompt 15)
- **Location**: Bottom of page, new footer section
- **Content**: Communication milestones leading to event
- **Format**: Timeline component (vertical list)
- **File**: `src/App.tsx` new footer section
- **Status**: Pending

## PHASE 4: VISUAL ENHANCEMENTS (MANUAL REVIEW REQUIRED)

### 16. Hero Section Updates (Prompt 10)
- **Task**: Review/update hero content and CTA
- **Risk**: Low, mostly text updates
- **Status**: Manual review recommended

### 17. Static Map Integration
- **Task**: Replace map placeholder with static Kendall Square image  
- **Risk**: Medium - previous interactive map broke site
- **Status**: Manual implementation only

### 18. AMI Logo Integration
- **Task**: Add white & color SVG logos to header/footer
- **Risk**: Medium - new asset integration
- **Status**: Manual implementation only

## EXECUTION NOTES

### Safe for Autocomplete:
- All Phase 1 & 2 tasks (content updates, new text sections)
- Simple component additions (chips, text blocks)
- Existing section modifications

### Require Manual Review:
- Complex visual integrations (maps, logos)
- Major layout restructures  
- New interactive components

### Content Dependencies:
- Speaker section needs actual speaker photos/bios
- Timeline sidebar decision (supplement vs replace existing schedule)
- Final room rates and negotiation dates

### Implementation Order:
1. Execute Phases 1-2 via autocomplete for maximum efficiency
2. Gather visual assets and speaker content
3. Manual review Phase 4 items with user
4. Final integration and testing

## SUCCESS CRITERIA
- All 15 site-review action items addressed
- All prompts 7-15 implemented appropriately  
- No site-breaking changes introduced
- Content aligned with latest copy guidance
- Visual consistency maintained throughout