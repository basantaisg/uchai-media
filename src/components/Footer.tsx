import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm text-muted-foreground">
          Crafted with precision by{" "}
          <span className="font-semibold gradient-text">UCHAI MEDIA</span>
        </span>

        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/uchai_marketing/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.instagram.com/uchai_marketing/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/uchai_marketing/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Youtube size={18} />
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#origin" className="hover:text-foreground transition-colors">Origin</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
