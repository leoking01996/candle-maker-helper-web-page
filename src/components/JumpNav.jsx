export default function JumpNav() {
  const links = [
    { href: '#guide', label: 'Process' },
    { href: '#reference', label: 'Wax reference' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#notes', label: 'Troubleshooting' },
  ]
  return (
    <nav className="jump">
      <div className="wrap">
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
