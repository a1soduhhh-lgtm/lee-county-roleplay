
import React, { useState } from "react";
import {
  Shield, Home, MessageSquare, FileText,
  Users, ChevronDown, Search, Bell,
  Menu, X, ArrowRight, Settings
} from "lucide-react";

const departments = [
  "Lee County Sheriff's Office",
  "Police Department",
  "Fire & EMS",
  "Civilian Operations",
  "Communications"
];

const resources = [
  "Rules and Regulations",
  "Staff Directory",
  "Frequently Asked Questions",
  "Community Gallery"
];

const forumCategories = [
  ["Community Announcements", "Official news and updates"],
  ["Community Information", "Rules and community resources"],
  ["Applications", "Recruitment and applications"],
  ["Department Discussions", "Department information"],
  ["General Discussion", "Talk with other members"],
  ["Community Support", "Get help from our staff"]
];

export default function App() {
  const [page, setPage] = useState("Home");
  const [dropdown, setDropdown] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  function navigate(destination) {
    setPage(destination);
    setDropdown("");
    setMobileMenu(false);
    window.scrollTo(0, 0);
  }

  const menu = (name, items) => (
    <div className="dropdown">
      <button
        onClick={() => setDropdown(
          dropdown === name ? "" : name
        )}
      >
        {name} <ChevronDown size={14} />
      </button>
      {dropdown === name && (
        <div className="dropdown-menu">
          {items.map(item => (
            <button key={item}
              onClick={() => navigate(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="website">
      <header className="header">
        <div className="header-inner">
          <button className="brand"
            onClick={() => navigate("Home")}>
            <Shield size={32} />
            <span>
              <strong>LEE COUNTY ROLEPLAY</strong>
              <small>Official Community Website</small>
            </span>
          </button>

          <nav className={mobileMenu ? "nav open" : "nav"}>
            {["Home", "Forums", "Open Applications"].map(
              item => (
                <button key={item}
                  onClick={() => navigate(item)}>
                  {item}
                </button>
              )
            )}
            {menu("Departments", departments)}
            {menu("Resources", resources)}
          </nav>

          <button className="mobile-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className="userbar">
        <span>Welcome to Lee County Roleplay</span>
        <div>
          <button onClick={() => navigate("Login")}>
            Sign In
          </button>
          <button className="register"
            onClick={() => navigate("Register")}>
            Register
          </button>
        </div>
      </div>

      <main className="container">
        <div className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              WELCOME TO OUR COMMUNITY
            </span>
            <h1>LEE COUNTY ROLEPLAY</h1>
            <p>
              Experience realistic and professional
              roleplay with a community dedicated to
              creativity, teamwork, and great experiences.
            </p>
            <button className="primary-btn"
              onClick={() => navigate("Open Applications")}>
              Join Our Community <ArrowRight size={17}/>
            </button>
          </div>
        </div>

        <div className="breadcrumbs">
          <button onClick={() => navigate("Home")}>
            Home
          </button>
          <span>/</span>
          <span>{page}</span>
        </div>

        {page === "Home" && (
          <div className="content-layout">
            <div className="main-column">
              <section className="panel">
                <h2>Welcome to Lee County Roleplay</h2>
                <div className="panel-body">
                  <p>
                    Welcome to the official Lee County
                    Roleplay community website. Here you
                    can find announcements, apply for
                    departments, participate in community
                    discussions, and stay connected.
                  </p>
                </div>
              </section>

              <section className="panel">
                <h2>Community Announcements</h2>
                <div className="panel-body">
                  <h3>Welcome to LCRP!</h3>
                  <p>
                    Our community website is currently
                    under development. Stay tuned for
                    more announcements and updates.
                  </p>
                </div>
              </section>

              <section className="panel">
                <h2>Community Forums</h2>
                {forumCategories.map(([name, desc]) => (
                  <button className="forum-row"
                    key={name}
                    onClick={() => navigate("Forums")}>
                    <MessageSquare size={26} />
                    <span>
                      <strong>{name}</strong>
                      <small>{desc}</small>
                    </span>
                    <ArrowRight size={17}/>
                  </button>
                ))}
              </section>
            </div>

            <aside className="sidebar">
              <section className="panel">
                <h2>Community Information</h2>
                <div className="panel-body">
                  <p>Welcome to Lee County Roleplay!</p>
                  <p>Explore our community and departments.</p>
                </div>
              </section>

              <section className="panel">
                <h2>Quick Links</h2>
                {["Forums", "Open Applications",
                  "Staff Directory",
                  "Rules and Regulations"].map(item => (
                  <button className="side-link"
                    key={item}
                    onClick={() => navigate(item)}>
                    {item} <ArrowRight size={15}/>
                  </button>
                ))}
              </section>
            </aside>
          </div>
        )}

        {page === "Forums" && (
          <section className="panel">
            <h2>Community Forums</h2>
            {forumCategories.map(([name, desc]) => (
              <div className="forum-row" key={name}>
                <MessageSquare size={26}/>
                <span>
                  <strong>{name}</strong>
                  <small>{desc}</small>
                </span>
              </div>
            ))}
            <div className="panel-body">
              <p>
                Forum discussions will become available
                after connecting Supabase.
              </p>
            </div>
          </section>
        )}

        {page === "Staff Directory" && (
          <section className="panel">
            <h2>Community Leadership</h2>
            <div className="staff-grid">
              {["Community Owner", "Community Director",
                "Community Manager", "Administrator"].map(
                role => (
                  <div className="staff-card" key={role}>
                    <div className="avatar">
                      <Users size={30}/>
                    </div>
                    <strong>Staff Member</strong>
                    <small>{role}</small>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {!["Home", "Forums", "Staff Directory"].includes(page)
          && (
          <section className="panel">
            <h2>{page}</h2>
            <div className="panel-body">
              <p>
                This section of Lee County Roleplay
                is currently being developed.
              </p>
              <button className="primary-btn"
                onClick={() => navigate("Home")}>
                Return Home
              </button>
            </div>
          </section>
        )}
      </main>

      <footer>
        <strong>LEE COUNTY ROLEPLAY</strong>
        <p>
          © {new Date().getFullYear()} Lee County Roleplay.
          All Rights Reserved.
        </p>
        <small>
          Independent fictional roleplay community.
        </small>
      </footer>
    </div>
  );
}
