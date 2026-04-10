import { useRef, useEffect, useState } from 'react'
import { Play, Heart, Eye } from 'lucide-react'
import reel1 from '../assets/reel/reel1.mp4'
import reel2 from '../assets/reel/reel2.mp4'
import reel3 from '../assets/reel/reel3.mp4'
import reel4 from '../assets/reel/reel4.mp4'
import './Reels.css'

const reelsData = [
  { video: reel1, views: '12K' },
  { video: reel2, views: '8.4K' },
  { video: reel3, views: '15K' },
  { video: reel4, views: '10K' },
]

export default function Reels() {
  const videoRefs = useRef([])
  const gridRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    if (!gridRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
    const max = scrollWidth - clientWidth;
    if (max > 0) {
      setScrollProgress(scrollLeft / max);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play().catch(err => console.log('Video play error:', err));
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.5 });

    const currentRefs = videoRefs.current;
    currentRefs.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      currentRefs.forEach(video => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section className="reels" id="reels">
      <div className="reels-header">
        <div className="section-label-container reveal-up">
          <span className="section-label">Spiritual Shorts</span>
        </div>
        <h2 className="reveal-up">The Living <em>Spiritual Feed</em></h2>
        <p className="reveal-up">
          Short, powerful spiritual content — daily inspiration in bite-sized form.
        </p>
      </div>

      <div className="reels-grid" ref={gridRef} onScroll={handleScroll}>
        {reelsData.map((r, i) => (
          <div
            key={i}
            className="reel-card reveal-up"
          >
            <video
              ref={el => videoRefs.current[i] = el}
              src={r.video}
              muted
              loop
              playsInline
              preload="metadata"
              loading="lazy"
            />

            <div className="reel-overlay">
              <div className="reel-play-btn">
                <Play size={24} />
              </div>

              <div className="reel-stats">
                <div className="stat-item"><Heart size={16} /></div>
                <div className="stat-item"><Eye size={16} /> <span>{r.views}</span></div>
              </div>

              <div className="reel-bottom-shadow" />
            </div>
          </div>
        ))}
      </div>

      <div className="custom-scrollbar-wrapper reveal-up">
        <div className="custom-scrollbar-track">
          <div 
            className="custom-scrollbar-thumb" 
            style={{ left: `${scrollProgress * 60}%` }} 
          />
        </div>
      </div>
    </section>
  )
}
