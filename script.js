/* Works offline: no frameworks, build tools, network calls or cookies. */
(function () {
  'use strict';
  const focus = {
    E: {label: 'FOCUS / E', title: 'Principal Solutions Architect', description: 'Designing event-driven, API-first integration and data platforms for always-on enterprise operations.', points: ['Enterprise integration across 86 systems', 'Architecture governance and technology roadmaps', 'API-first design, streaming and reliable operations']},
    A: {label: 'FOCUS / A', title: 'Principal Solutions Architect, Airline Operations', description: 'Connecting the systems that run airline scheduling, operations control, flight planning and cross-carrier schedule distribution.', points: ['Lufthansa Systems NetLine subject matter expertise', 'IOCC, operational flight data and IATA standards', 'Flight planning, safety and schedule coherence']},
    T: {label: 'FOCUS / T', title: 'Principal Solutions Architect, Data & AI', description: 'Translating large-scale operational data and integration challenges into reliable platforms and production AI applications.', points: ['Graph neural networks and similarity optimization', 'Operational data platforms and canonical data models', 'Kafka, IBM MQ and cross-enterprise integration']},
    P: {label: 'FOCUS / P', title: 'Principal Solutions Architect, Platform Product Owner', description: 'Steering mission-critical products from requirements and prioritization through delivery, operations and continuous improvement.', points: ['Ten years of de facto ownership of two Tier-0 platforms', 'Roadmaps and priorities for six operational systems', 'Scrum, stakeholder management and vendor evaluation']},
    G: {label: 'FOCUS / G', title: 'Principal Solutions Architect, Digital Transformation', description: 'Leading architecture-led transformation with responsibility for modernization, delivery governance and operational continuity.', points: ['Enterprise-scale integration modernization', 'Cross-functional programme and technology leadership', 'Business cases, RFPs and change governance']}
  };
  const focusTr = {
    E: {label: 'ODAK / E', title: 'Principal Solutions Architect', description: 'Kesintisiz çalışan kurumsal operasyonlar için olay güdümlü, API öncelikli entegrasyon ve veri platformları tasarlamak.', points: ['86 sistemi kapsayan kurumsal entegrasyon', 'Mimari yönetişim ve teknoloji yol haritaları', 'API öncelikli tasarım, veri akışı ve güvenilir operasyonlar']},
    A: {label: 'ODAK / A', title: 'Principal Solutions Architect, Havayolu Operasyonları', description: 'Havayolu uçuş programı yönetimini, operasyon kontrolünü, uçuş planlamasını ve taşıyıcılar arası program dağıtımını yürüten sistemleri birbirine bağlamak.', points: ['Lufthansa Systems NetLine konu uzmanlığı', 'IOCC, operasyonel uçuş verisi ve IATA standartları', 'Uçuş planlaması, emniyet ve uçuş programı tutarlılığı']},
    T: {label: 'ODAK / T', title: 'Principal Solutions Architect, Veri ve Yapay Zekâ', description: 'Büyük ölçekli operasyonel veri ve entegrasyon zorluklarını güvenilir platformlara ve üretimde çalışan yapay zekâ uygulamalarına dönüştürmek.', points: ['Çizge sinir ağları ve benzerlik optimizasyonu', 'Operasyonel veri platformları ve kanonik veri modelleri', 'Kafka, IBM MQ ve kurumlar arası entegrasyon']},
    P: {label: 'ODAK / P', title: 'Principal Solutions Architect, Platform Product Owner', description: 'Görev kritik ürünleri gereksinimlerden ve önceliklendirmeden teslimata, operasyona ve sürekli iyileştirmeye kadar yönlendirmek.', points: ['İki Tier-0 platformun on yıllık fiili ürün sahipliği', 'Altı operasyonel sistem için yol haritaları ve öncelikler', 'Scrum, paydaş yönetimi ve tedarikçi değerlendirmesi']},
    G: {label: 'ODAK / G', title: 'Principal Solutions Architect, Dijital Dönüşüm', description: 'Modernizasyonun, teslimat yönetişiminin ve operasyonel sürekliliğin sorumluluğunu üstlenerek mimari odaklı dönüşüme liderlik etmek.', points: ['Kurumsal ölçekte entegrasyon modernizasyonu', 'Fonksiyonlar arası program ve teknoloji liderliği', 'İş senaryoları, RFP\'ler ve değişim yönetişimi']}
  };
  const isTr = (document.documentElement.lang || '').toLowerCase().startsWith('tr');
  const content = isTr ? focusTr : focus;
  const tabs = [...document.querySelectorAll('[data-focus]')];
  const label = document.getElementById('focus-label');
  const title = document.getElementById('focus-title');
  const desc = document.getElementById('focus-description');
  const list = document.getElementById('focus-list');
  const download = document.getElementById('focus-download');
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    const id = tab.dataset.focus;
    const entry = content[id];
    if (!entry) return;
    tabs.forEach((btn) => { const active = btn === tab; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', String(active)); });
    label.textContent = entry.label;
    title.textContent = entry.title;
    desc.textContent = entry.description;
    list.replaceChildren(...entry.points.map((p) => { const li = document.createElement('li'); li.textContent = p; return li; }));
    download.setAttribute('href', download.getAttribute('href').replace(/Sefik_Egriboz_[A-Z]\.pdf$/, 'Sefik_Egriboz_' + id + '.pdf'));
  }));
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false');
    }));
  }
  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
