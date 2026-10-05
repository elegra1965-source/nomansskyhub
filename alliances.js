/* No Man's Sky Hub — Galactic Alliances section (Cosmos update, 7.0)
   Inserts a permanent "Alliances" section just above the footer.
   (Visitors log their own alliances in ATLAS. MY_ALLIANCE is an optional site-wide promo — leave null.) */
(function () {
  var MY_ALLIANCE = null; // e.g. { name: 'Elegra Explorers', tag: 'ELGR', how: 'Visit any ELGR-owned station in Euclid' }

  var I = {
    found: '<path d="M4 21V4"/><path d="M4 4h12l-2.5 4L16 12H4"/>',
    join: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M17 8v6M14 11h6"/>',
    travel: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>',
    three: '<path d="M12 3l8 4.5-8 4.5-8-4.5z"/><path d="M4 12l8 4.5 8-4.5"/><path d="M4 16.5l8 4.5 8-4.5"/>'
  };
  function card(n, ico, title, body) {
    return '<div class="al-card"><div class="al-n">' + n + '</div><div class="al-ico" aria-hidden="true"><svg viewBox="0 0 24 24">' + I[ico] +
      '</svg></div><h3>' + title + '</h3><p>' + body + '</p></div>';
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function run() {
    if (document.getElementById('alliances')) return;
    var s = document.createElement('section');
    s.id = 'alliances';
    s.className = 'al-sec';
    s.innerHTML =
      '<div class="al-head"><div class="al-kicker">◆ Cosmos update · Galactic Alliances</div>' +
      '<h2 class="al-title">Band together across the stars</h2>' +
      '<p class="al-sub">Alliances let Travellers claim space stations under one banner, share fast travel between their systems and climb the galactic rankings together.</p></div>' +
      '<div class="al-grid">' +
        card('01', 'found', 'Found an alliance', 'Only a <b>space station director</b> can found one, from the <b>Station Core</b>. Choose a name, a <b>4-character tag</b>, an emblem and a banner colour.') +
        card('02', 'join', 'Join one', 'No station needed. Visit <b>any space station an alliance owns</b> and join from there. Its banner flies wherever it holds territory.') +
        card('03', 'three', 'Up to three', 'You can belong to <b>three alliances at once</b>, so you can mix a home crew, a community hub and a trading partnership.') +
        card('04', 'travel', 'Fast travel', 'Members get quick access to their alliances’ systems through the <b>teleporter</b>, so the whole network is one jump away.') +
      '</div>' +
      '<div class="al-rank">' +
        '<div class="al-card"><div class="al-n">RANKINGS</div><h3 style="margin-top:10px">How the leaderboard works</h3>' +
          '<p>Alliances are ranked by how <b>populous</b>, <b>active</b> and <b>expansive</b> they are. Open the <b>Station Core → View Galactic Alliances</b> in game to see the largest and busiest collectives.</p>' +
          '<div class="al-board" aria-hidden="true">' +
            '<div class="al-row"><span class="pos">◆</span>MEMBERS<span class="bar"><i style="width:92%"></i></span></div>' +
            '<div class="al-row"><span class="pos">◆</span>ACTIVITY<span class="bar"><i style="width:78%"></i></span></div>' +
            '<div class="al-row"><span class="pos">◆</span>TERRITORY<span class="bar"><i style="width:64%"></i></span></div>' +
          '</div></div>' +
        '<div class="al-card"><div class="al-n">THE HUB NETWORK</div><h3 style="margin-top:10px">' +
          (MY_ALLIANCE ? 'Join ' + esc(MY_ALLIANCE.name) : 'Log your alliances') + '</h3>' +
          '<p>' + (MY_ALLIANCE ? esc(MY_ALLIANCE.how || 'Visit one of our stations to join.') :
            'Add up to three of your alliances in ATLAS (tap \u21c4 on the expedition panel). They stay on your device, and the Atlas will know who you fly with.') + '</p>' +
          (MY_ALLIANCE && MY_ALLIANCE.tag ? '<span class="al-mine-tag">[' + esc(MY_ALLIANCE.tag) + ']</span><br>' : '') +
          '<a class="al-cta" href="https://atlas.nomansskyhub.app/" target="_blank" rel="noopener">◈ Open ATLAS</a></div>' +
      '</div>' +
      '<div class="al-src">Source: <a href="https://www.nomanssky.com/cosmos-update/" target="_blank" rel="noopener">Hello Games — Cosmos update</a> · Rankings are shown in game only.</div>';
    var footer = document.querySelector('footer');
    if (footer) footer.parentNode.insertBefore(s, footer); else document.body.appendChild(s);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
