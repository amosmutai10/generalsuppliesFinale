// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active")
    menuIcon.style.display = "inline"
    closeIcon.style.display = "none"
  } else {
    mobileNav.classList.add("active")
    menuIcon.style.display = "none"
    closeIcon.style.display = "inline"
  }
}

function closeMobileMenu() {
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  mobileNav.classList.remove("active")
  menuIcon.style.display = "inline"
  closeIcon.style.display = "none"
}

// Product Filtering Functionality
function filterProducts() {
  const searchInput = document.getElementById("productSearch")
  const searchTerm = searchInput.value.toLowerCase()
  const productCards = document.querySelectorAll(".product-card")

  productCards.forEach((card) => {
    const productName = card.getAttribute("data-name").toLowerCase()
    const productCategory = card.getAttribute("data-category").toLowerCase()

    if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

function filterByCategory(category) {
  const productCards = document.querySelectorAll(".product-card")
  const filterButtons = document.querySelectorAll(".filter-btn")
  const detailedProducts = document.querySelectorAll(".detailed-product")

  // Update active button
  filterButtons.forEach((btn) => btn.classList.remove("active"))
  // Highlight via click (event) or programmatically via category match
  let matched = false
  if (typeof event !== "undefined" && event && event.target && event.target.classList && event.target.classList.contains('filter-btn')) {
    event.target.classList.add("active")
    matched = true
  }
  if (!matched) {
    // Try to match button whose onclick contains the category string
    filterButtons.forEach((btn) => {
      const onclickAttr = btn.getAttribute('onclick') || ''
      if (category === 'all' && onclickAttr.includes("'all'")) {
        btn.classList.add('active')
        matched = true
      } else if (onclickAttr.includes(`'${category}'`)) {
        btn.classList.add('active')
        matched = true
      }
    })
  }

  // Filter products
  productCards.forEach((card) => {
    const productCategory = card.getAttribute("data-category")

    if (category === "all") {
      // On water systems page, show all products immediately
      if (window.location.pathname.includes('water-systems')) {
        card.style.display = "block"
        return
      }
      // Show only representative products (no detailed products)
      if (card.classList.contains("detailed-product")) {
        card.style.display = "none"
      } else {
        // Show representative products for fencing or building materials
        const productName = card.getAttribute("data-name")
        // For fencing page
        if (productName === "Chain Links" || productName === "Barbed Rolls" || productName === "Razor Rolls" || productName === "Chain Links 6ft" || productName === "Chain Links 8ft") {
          card.style.display = "block"
        }
        // For building materials page
        else if (productName === "Doors" || productName === "Cement" || productName === "Nails" || 
                 productName === "Roofing" || productName === "Steel Bars" || productName === "Timber" || 
                 productName === "Flooring and Tiles") {
          card.style.display = "block"
        }
        // For water systems page (all products are detailed, All tab does nothing)
        else if (!card.classList.contains("detailed-product") && !window.location.pathname.includes('water-systems')) {
          card.style.display = "block"
        }
        else {
          card.style.display = "none"
        }
      }
    } else {
      // Show detailed products for specific category
      if (card.classList.contains("detailed-product")) {
        if (productCategory === category) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      } else {
        // Hide all representative products when filtering by specific category
        card.style.display = "none"
      }
    }
  })

  // Clear search input when filtering by category
  const searchInput = document.getElementById("productSearch")
  if (searchInput) {
    searchInput.value = ""
  }
}

// WhatsApp Integration
function orderProduct(productName, price) {
  const message = `Hi! I'm interested in ${productName} (${price}). Can you provide more details?`
  const whatsappUrl = `https://wa.me/254762638255?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

function openWhatsAppContact() {
  const message = "Hi! I'd like to inquire about your products and services."
  const whatsappUrl = `https://wa.me/254762638255?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Contact Form Handling
function handleFormSubmit(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)

  // Get form values
  const firstName = form.querySelector('input[type="text"]').value
  const lastName = form.querySelectorAll('input[type="text"]')[1].value
  const email = form.querySelector('input[type="email"]').value
  const phone = form.querySelector('input[type="tel"]').value
  const message = form.querySelector("textarea").value

  // Create WhatsApp message
  const whatsappMessage = `New Contact Form Submission:
    
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}`

  const whatsappUrl = `https://wa.me/254762638255?text=${encodeURIComponent(whatsappMessage)}`
  window.open(whatsappUrl, "_blank")

  // Show success message
  alert("Thank you for your message! We will redirect you to WhatsApp to complete your inquiry.")

  // Reset form
  form.reset()
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Initialize product search functionality if on product pages
  const searchInput = document.getElementById("productSearch")
  if (searchInput) {
    searchInput.addEventListener("input", filterProducts)
    // Ensure default view shows only representative items under "All"
    filterByCategory('all')
  }

  // Add scroll-to-top functionality
  createScrollToTopButton()

  // Initialize lazy loading for images
  initializeLazyLoading()

  // Add form validation
  initializeFormValidation()
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(250, 251, 252, 0.98)"
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(250, 251, 252, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Scroll to Top Button
function createScrollToTopButton() {
  const scrollButton = document.createElement("button")
  scrollButton.innerHTML = "↑"
  scrollButton.className = "scroll-to-top"
  scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: var(--primary);
        color: var(--primary-foreground);
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `

  document.body.appendChild(scrollButton)

  // Show/hide scroll button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.style.opacity = "1"
      scrollButton.style.visibility = "visible"
    } else {
      scrollButton.style.opacity = "0"
      scrollButton.style.visibility = "hidden"
    }
  })

  // Scroll to top when clicked
  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Lazy Loading for Images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Form Validation
function initializeFormValidation() {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea")

    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this)
      })

      input.addEventListener("input", function () {
        if (this.classList.contains("error")) {
          validateField(this)
        }
      })
    })
  })
}

function validateField(field) {
  const value = field.value.trim()
  let isValid = true
  let errorMessage = ""

  // Remove existing error styling
  field.classList.remove("error")
  const existingError = field.parentNode.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }

  // Check if field is required
  if (field.hasAttribute("required") && !value) {
    isValid = false
    errorMessage = "This field is required"
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      isValid = false
      errorMessage = "Please enter a valid email address"
    }
  }

  // Phone validation
  if (field.type === "tel" && value) {
    const phoneRegex = /^[+]?[0-9\s\-$$$$]{10,}$/
    if (!phoneRegex.test(value)) {
      isValid = false
      errorMessage = "Please enter a valid phone number"
    }
  }

  if (!isValid) {
    field.classList.add("error")
    const errorDiv = document.createElement("div")
    errorDiv.className = "error-message"
    errorDiv.textContent = errorMessage
    errorDiv.style.cssText = `
            color: #dc2626;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `
    field.parentNode.appendChild(errorDiv)
  }

  return isValid
}

// Product Card Animations
function initializeProductAnimations() {
  const productCards = document.querySelectorAll(".product-card")

  if ("IntersectionObserver" in window) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    productCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.6s, transform 0.6s"
      cardObserver.observe(card)
    })
  }
}

// Search Enhancement
function enhanceSearch() {
  const searchInput = document.getElementById("productSearch")
  if (!searchInput) return

  let searchTimeout

  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      filterProducts()
      updateSearchResults()
    }, 300)
  })
}

function updateSearchResults() {
  const productCards = document.querySelectorAll(".product-card")
  const visibleCards = Array.from(productCards).filter((card) => card.style.display !== "none")

  // Create or update results counter
  let resultsCounter = document.querySelector(".search-results")
  if (!resultsCounter) {
    resultsCounter = document.createElement("div")
    resultsCounter.className = "search-results"
    resultsCounter.style.cssText = `
            text-align: center;
            margin: 1rem 0;
            color: var(--muted-foreground);
            font-size: 0.875rem;
        `

    const productsGrid = document.getElementById("productsGrid")
    if (productsGrid) {
      productsGrid.parentNode.insertBefore(resultsCounter, productsGrid)
    }
  }

  const searchTerm = document.getElementById("productSearch").value
  if (searchTerm) {
    resultsCounter.textContent = `Showing ${visibleCards.length} result${visibleCards.length !== 1 ? "s" : ""} for "${searchTerm}"`
  } else {
    resultsCounter.textContent = ""
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeProductAnimations()
  enhanceSearch()

  // Add loading states for buttons
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("whatsapp-btn") || this.classList.contains("whatsapp-contact-btn")) {
        const originalText = this.textContent
        this.textContent = "Opening WhatsApp..."
        this.disabled = true

        setTimeout(() => {
          this.textContent = originalText
          this.disabled = false
        }, 2000)
      }
    })
  })
})

// Error handling for missing elements
window.addEventListener("error", (e) => {
  console.warn("Non-critical error:", e.message)
})

// Remove cards with missing/broken images to avoid empty containers
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('#productsGrid img')
  imgs.forEach((img) => {
    img.addEventListener('error', () => {
      const card = img.closest('.product-card')
      if (card) card.remove()
    })
  })
})

// Add CSS for error states
const errorStyles = document.createElement("style")
errorStyles.textContent = `
    .form-input.error {
        border-color: #dc2626;
        box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.1);
    }
    
    .error-message {
        color: #dc2626;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
    
    .scroll-to-top:hover {
        background: var(--accent) !important;
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        .scroll-to-top {
            bottom: 1rem !important;
            right: 1rem !important;
            width: 2.5rem !important;
            height: 2.5rem !important;
            font-size: 1.25rem !important;
        }
    }
`
document.head.appendChild(errorStyles)
