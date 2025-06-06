# AMI Boston Site - Execution Todo List

## HIGH PRIORITY TASKS (Execute First)

### 1. Update Guiding Questions (4&5) with Energy Abundance and 90-Day Learning Sprints
- **File**: `src/App.tsx` lines ~190-194
- **Action**: Replace existing questions 4 & 5 with new content from site-review
- **Old Question 4**: "Learning to Learn – What micro‑rituals keep organisations adaptive every 90 days?"
- **New Question 4**: "90-Day Learning Sprints – Re-tune skills & processes quarterly to match AI's velocity."
- **Old Question 5**: "Creative Collisions – How do biotech × robotics × arts mash‑ups spark meaningful innovation?"
- **New Question 5**: "Energy Abundance / Redefined Need – If limitless energy & digital labour are at hand, what still counts as 'need' & 'work'?"
- **Status**: ✅ Copy updated in meetings/initial_site_copy.md, needs implementation

### 2. Add 83% stat to Inner Technologies question (question 6)
- **File**: `src/App.tsx` line ~195
- **Action**: Update question 6 to include statistical context
- **Current**: "Inner Technologies – Which mindfulness practices build resilience for exponential times?"
- **New**: "Inner Technologies – Which mindfulness practices build resilience for exponential times? (83% of public LLM use = self-help/therapy)"
- **Status**: Pending

### 3. Add Inter-Generational Loom subsection after theme pillars
- **File**: `src/App.tsx` after line ~185 (after pillars, before guiding questions)
- **Content**: 
```jsx
<div className="inter-generational-loom">
  <h4 className="loom-title">Inter-Generational Loom</h4>
  <p className="loom-description">
    <strong>Students ↔ Seasoned Innovators</strong> — The most powerful learning happens when fresh perspectives meet deep experience. 
    Our <em>Peer-Mentor Rings</em> breakout sessions pair newcomers with veterans in rotating micro-conversations that spark breakthrough insights.
  </p>
</div>
```
- **Status**: Pending

### 4. Add Virtual On-Ramp banner section (Bob Johansson 12 Jun webinar)
- **File**: `src/App.tsx` after theme section, before schedule
- **Content**:
```jsx
<section className="virtual-onramp">
  <div className="container">
    <h2 className="onramp-title">🎯 Virtual On-Ramp</h2>
    <p className="onramp-info">
      <strong>12 Jun 2025</strong> — Bob Johansson (IFTF) webinar: <em>"4 Augmented Leadership Skills for 2026"</em> — Free preview session with replay available March 2026.
    </p>
    <a href="#virtual-ramp" className="onramp-cta">Register for Virtual Session</a>
  </div>
</section>
```
- **Status**: Pending

### 5. Update ALL venue cards with room rates $239-$289 + negotiation timeline
- **File**: `src/App.tsx` venues section (lines ~400-737)
- **Action**: Add room rate information to each venue card
- **Content to Add**: 
  - **Room Rate: $239-$289** 
  - *Negotiations start Jul 2025*
  - **Room block: 45 rooms × 3 nights**
- **Apply to**: Boston Marriott Cambridge, The Charles Hotel, Hyatt Regency Cambridge, Courtyard Marriott Cambridge
- **Status**: Pending

### 7. Add Budget section after venues (Prompt 7)
- **File**: `src/App.tsx` after venues section
- **Content**: Create new budget section with fee structure, headcount, projections
- **Status**: Pending

### 8. Add Risk Matrix & Optional Upgrades within budget section
- **File**: `src/App.tsx` within budget section
- **Content**: 3x3 risk matrix + upgrade options list
- **Status**: Pending

## MEDIUM PRIORITY TASKS

### 6. Add Algorithmic Justice Sandbox to Thursday schedule
- **File**: `src/App.tsx` schedule table (line ~228)
- **Action**: Add "Algorithmic Justice Sandbox" to Thursday afternoon activities
- **Status**: Pending

### 9. Add Activities section before schedule (Prompt 8)
- **File**: `src/App.tsx` new section before schedule
- **Content**: Bullet list of key meeting activities
- **Status**: Pending

### 10. Add Premise/Blue Block after hero (Prompt 9)
- **File**: `src/App.tsx` after hero section
- **Content**: Highlighted premise with blue background
- **Status**: Pending

### 11. Add Access & Confidence chips section (Prompt 13)
- **File**: `src/App.tsx` near end of page
- **Content**: Two styled chips - "Access" and "Confidence"
- **Status**: Pending

### 12. Add Access Likelihood chips to labs section
- **File**: `src/App.tsx` labs section modification
- **Content**: Add "✅ 90%" type indicators to lab cards
- **Status**: Pending

### 13. Add Speaker Highlights section (Prompt 12) - needs speaker content
- **File**: `src/App.tsx` new section
- **Content**: Cards for Bob Johansson, Zai Narimani, Mark Stevens
- **Status**: Pending (needs actual speaker photos/bios)

### 14. Add Footer Media Timeline (Prompt 15)
- **File**: `src/App.tsx` new footer section
- **Content**: Timeline of communication milestones
- **Status**: Pending

## LOW PRIORITY TASKS (Manual Review Recommended)

### 15. Update hero section if needed (Prompt 10)
- **File**: `src/App.tsx` hero section
- **Action**: Review and update hero content/CTA
- **Status**: Low priority

### 16. Add static Kendall Square map (replacing placeholder)
- **File**: `src/App.tsx` map section
- **Action**: Replace placeholder with static map image
- **Status**: Low priority - visual asset needed

### 17. Add AMI logos (white & color SVG) to header/footer
- **File**: `src/App.tsx` header/footer
- **Action**: Add AMI branding logos
- **Status**: Low priority - SVG assets needed

## EXECUTION NOTES

- **High Priority tasks (1-5, 7-8)**: Safe for autocomplete execution
- **Medium Priority tasks (6, 9-14)**: Mostly safe, some need content decisions
- **Low Priority tasks (15-17)**: Require manual review or missing assets
- **Total tasks**: 17 items covering all site-review actions and implementation prompts
- **Content dependencies**: Speaker details, AMI logos, map assets