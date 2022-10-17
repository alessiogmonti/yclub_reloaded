const MenuLinks = [ 
  {'field': 'community', 'active':false, 
    'sublinks': [
      { 'field': 'mission', 'active':false, 'available':true},
      { 'field': 'lifestyle', 'active':false, 'available':true},
      { 'field': 'team', 'active':false, 'available':true, },
      { 'field': 'roadmap', 'active':false, 'available':true, },
    ]
}, 
  {'field': 'marketplace', 'active':false, 'available': false, 'url':'coming soon'}, 
  {'field': 'web3', 'active':true, 
    'sublinks': [
      { 'field': 'mint', 'active':false, 'available':true},
      { 'field': 'collection', 'active':false, 'available':false},
      { 'field': 'store', 'active':false, 'available':false}
    ]
  }
]

export default MenuLinks