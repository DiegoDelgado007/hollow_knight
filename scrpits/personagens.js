const members = [
    { name: 'Vessel', id: 'Vessel' },
    { name: 'Hornet', id: 'Hornet' },
    { name: 'Dama Branca', id: 'Dama Branca' },
    { name: 'Cavaleiro Vazio', id: 'Cavaleiro Vazio' },
    { name: 'Radiancia', id: 'Radiancia' },
    { name: 'Zote', id: 'Zote' },
  ]

  let activeMember = 0
  const images = document.getElementById('images')

  function navigationMember(direction){
    activeMember = activeMember + direction

    const member = members[activeMember]
    
    console.log(activeMember, member);

    images.style.transform = 'translateY(${-100 * activeMember}vh)'
 }