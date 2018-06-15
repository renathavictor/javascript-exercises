const ips = [
  {
    address: "192.168.0.2",
    mask: "255.255.255.0"
  },
  {
    address: "192.168.0.10",
    mask: "255.255.255.0"
  },
  {
    address: "192.168.0.26",
    mask: "255.255.255.0"
  },
  {
    address: "192.168.0.30",
    mask: "255.255.255.0"
  }
]

const corpo = document.querySelector('tbody')

corpo.innerHTML = ips.map(e => `
  <tr> 
    <td>${e.address}</td>
    <td>${e.mask}</td>
  </tr>`).join('')