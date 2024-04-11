import React from 'react'

export default function Footer() {
  return (
    <div>

      <footer className="footer">
        <div className='footer-container'>
          <div className='footer-row'>
            <ul>
              <li>
                <a title="characters" href="/api/character">
                  <span className="caption__Caption-sc-w9tm9f-0 lpmWNO">
                    characters: 826
                  </span>
                </a>
              </li>
              <li><a title="locations" href="/api/location">
                <span class="caption__Caption-sc-w9tm9f-0 lpmWNO">locations: 126
                </span>
              </a>
              </li>
              <li><a title="episodes" href="/api/episode">
                <span class="caption__Caption-sc-w9tm9f-0 lpmWNO">episodes: 51</span>
              </a>
              </li>
            </ul><a href="https://status.rickandmortyapi.com" rel="noopener noreferrer" target="_blank" data-testid="server-status" class="externalLink__ExternalLink-sc-1lixk38-0 footer__Status-sc-vp91ct-2 ffGNdR dhmRna">
              <span class="caption__Caption-sc-w9tm9f-0 lpmWNO">server status</span>
              <span class="server-icon"></span>
            </a>
          </div>
        </div>

      </footer>
    </div>
  )
}
