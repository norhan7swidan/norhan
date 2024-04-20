function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu"); // إضافة/إزالة فئة .open-menu
}
document.getElementById('discardButton').addEventListener('click', function() {
    // قم بتحديد العناصر التي تحتوي على البيانات التي ترغب في مسحها
    const inputsToClear = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="url"]');
    
    // قم بمسح القيم المدخلة في العناصر
    inputsToClear.forEach(function(input) {
        input.value = '';
    });
});
document.getElementById('discardButton').addEventListener('click', function() {
    // قم بتحديد العناصر التي تحتوي على البيانات التي ترغب في مسحها
    const inputsToClear = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="url"]');
    
    // قم بمسح القيم المدخلة في العناصر
    inputsToClear.forEach(function(input) {
        input.value = '';
    });
});
function updateUserDetails() {
var userName = document.getElementById("user-name-input").value;
var userEmail = document.getElementById("user-email-input").value;
var userImage = document.getElementById("user-image-input").value;

// Check if all fields are filled
if (userName && userEmail && userImage) {
// Update user details
document.getElementById("user-name").innerText = userName;
document.getElementById("user-email").innerText = userEmail;
document.getElementById("user-image").src = userImage;

// Show the submenu
document.getElementById("submenu").style.display = "block";

// Hide the input fields after updating
document.getElementById("user-name-input").style.display = "none";
document.getElementById("user-email-input").style.display = "none";
document.getElementById("user-image-input").style.display = "none";

// Show the sub-menu
document.querySelector(".sub-menu").style.display = "block";
} else {
// Hide the submenu if any field is empty
document.getElementById("submenu").style.display = "none";
// Hide the sub-menu
document.querySelector(".sub-menu").style.display = "none";
}
}
document.getElementById("signOutButton").addEventListener("click", function() {
    // Perform sign out action here
    alert("You have been signed out!");
    // You can redirect the user to the logout page or perform any other necessary actions here
});
function discardChanges() {
    // Implement your logic to revert changes here
    alert("Changes have been discarded.");
}

// Add an event listener to the "Discard" button
document.getElementById("discardButton").addEventListener("click", function() {
    discardChanges();
});
// كائن لتخزين الوظائف
const functions = {
    saveChanges: function() {
        // Collect the updated user details
        const userName = document.getElementById("user-name").innerText;
        const userEmail = document.getElementById("user-email").innerText;
        const userImage = document.getElementById("user-image").src;

        // Perform the AJAX request to save changes
        fetch('https://your-server-url/save-user-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                userEmail: userEmail,
                userImage: userImage
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('User details saved successfully:', data);
            alert('Changes have been saved successfully!');
        })
        .catch(error => {
            console.error('Error saving user details:', error);
            alert('Error saving changes. Please try again.');
        });
    },
    goToPage: function(page) {
        window.location.href = page;
    }
};

// Add event listeners
document.getElementById("saveButton").addEventListener("click", functions.saveChanges);

if (!window.location.href.includes("person.html")) {
    document.getElementById("generalButton").addEventListener("click", function() {
        functions.goToPage('person.html');
    });
} else {
    document.getElementById("generalButton").addEventListener("click", function() {
        console.log("Staying on the current page");
    });
}

// الزرار
if (!window.location.href.includes("person.html")) {
    document.getElementById("generalButton").addEventListener("click", function() {
    goToPage('person.html');
     });
     } else {
   document.getElementById("generalButton").addEventListener("click", function() {
  console.log("Staying on the current page");
  });
  }
 function goToPage(page) {
 window.location.href = page;
     }
// الربط 
document.getElementById('saveButton').addEventListener('click', function(event) {
    event.preventDefault(); // منع سلوك الزر الافتراضي

    // جمع البيانات من النموذج الأول
    const name = document.getElementById('userForm1').querySelector('#name').value;
    const email = document.getElementById('userForm1').querySelector('#email').value;
    const gender = document.getElementById('userForm1').querySelector('#gender').value;
    const location = document.getElementById('userForm1').querySelector('#location').value;
    const phoneNumber = document.getElementById('userForm1').querySelector('#phoneNumber').value;

    // جمع البيانات من النموذج الثاني
    const nationality = document.getElementById('userForm2').querySelector('#nationality').value;
    const dateOfBirth = document.getElementById('userForm2').querySelector('#dateOfBirth').value;
    const websiteURL = document.getElementById('userForm2').querySelector('#websiteURL').value;
    const company = document.getElementById('userForm2').querySelector('#company').value;
    const otherWebsite = document.getElementById('userForm2').querySelector('#otherWebsite').value;

    // إنشاء كائن البيانات
    const formData = {
        name: name,
        email: email,
        gender: gender,
        location: location,
        phoneNumber: phoneNumber,
        nationality: nationality,
        dateOfBirth: dateOfBirth,
        websiteURL: websiteURL,
        company: company,
        otherWebsite: otherWebsite
    };

    // إرسال البيانات إلى الخادم
    fetch('https://test-api1-1.onrender.com/api/user/6622ced447d2b229b63e3f6f', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save data. Please try again.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Data submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert('Error submitting data. Please try again.');
    });
});
// document.getElementById('uploadButton').addEventListener('click', function() {
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.setAttribute('accept', 'image/*');
//     input.setAttribute('capture', 'gallery');

//     input.addEventListener('change', function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 // Display preview of the selected image
//                 document.querySelector('.card img').src = e.target.result;

//                 // Update the user's profile image
//                 updateUserProfileImage(e.target.result, file);
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     input.click();
// });

// Function to update the user's profile image
function updateUserProfileImage(imageData, imageFile) {
    // Update the src attribute of the user's profile image
    document.getElementById('user-image').src = imageData;

    // Send the image data to the server
    updateProfileImage(imageFile);
}

// Function to handle sending image data to the server
function updateProfileImage(imageFile) {
    // Create FormData object to send file data
    const formData = new FormData();
    formData.append('profileImage', imageFile);

    // Send AJAX request to the server
    fetch('https://your-server-url/update-profile-image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from the server
        console.log('Profile image updated successfully:', data);
        // Optionally, you can update the user's profile image displayed on the page
    })
    .catch(error => {
        console.error('Error updating profile image:', error);
    });
}

// Function to send image data to the server and update the profile
function updateProfileImage(imageFile) {
    // Create FormData object to send file data
    const formData = new FormData();
    formData.append('profileImage', imageFile);

    // Send AJAX request to the server
    fetch('https://your-server-url/update-profile-image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from the server
        console.log('Profile image updated successfully:', data);
        // Optionally, you can update the user's profile image displayed on the page
    })
    .catch(error => {
        console.error('Error updating profile image:', error);
    });
}
// Function to handle profile image upload
document.getElementById('uploadButton').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.setAttribute('accept', 'image/*');
    input.setAttribute('capture', 'gallery');

    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Display preview of the selected image
                document.querySelector('.card img').src = e.target.result;

                // Update the user's profile image
                updateUserProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    input.click();
});

// Function to update the user's profile image
function updateUserProfileImage(imageData) {
    // Update the src attribute of the user's profile image
    document.getElementById('user-image').src = imageData;

    // You can also send the image data to the server if needed
    // Here you can add code to send the imageData to the server and update the user's profile image in the database
}
//  ربط الصوره مع الصفحات الاخري
// تحديث الصورة في الصفحة الرئيسية
function updateProfileImage(imageUrl) {
    document.querySelector('.rounded-circle').src = imageUrl;
    // حفظ رابط الصورة في local storage
    localStorage.setItem('profileImage', imageUrl);
}
// share
// تعريف الدالة "login" واستقبال الزر كمعامل
function login(button) {
    // الشفرة التي تقوم بتسجيل الدخول هنا
    console.log("User logged in successfully!");
    
    // يمكنك إضافة أي سلوك آخر بعد تسجيل الدخول هنا، مثل عرض المحتوى
    document.getElementById('content').innerHTML = "مرحبًا، أنت الآن مسجل الدخول!";
    
    // يمكنك أيضًا استخدام العنصر الذي تم النقر عليه (الزر) لتغيير نصه مثلاً
    button.innerHTML = "Logged In";
}
//1
document.getElementById('facebook-link').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank');
});
document.getElementById('twitter-link').addEventListener('click', function() {
    window.open('https://twitter.com/', '_blank');
});
document.getElementById('email-link').addEventListener('click', function() {
    window.open('https://gmail.com', '_blank');
});
document.getElementById('whatsapp-link').addEventListener('click', function() {
    window.open('https://whatsapp.com', '_blank');
});
document.getElementById('telegram-link').addEventListener('click', function() {
    window.open('https://web.telegram.org/a/', '_blank');
});
//2
document.addEventListener("DOMContentLoaded", function() {
    const viewBtn = document.querySelector(".view-modal");
    const popup = document.querySelector(".popup");
    const close = popup.querySelector(".close");
    const field = popup.querySelector(".field");
    const input = field.querySelector("input");
    const copy = field.querySelector("button");
  
    viewBtn.addEventListener("click", function() {
      popup.classList.toggle("show");
    });
  
    close.addEventListener("click", function() {
      viewBtn.click();
    });
  
    copy.addEventListener("click", function() {
      input.select();
      document.execCommand("copy");
      this.innerText = "Copied!";
      setTimeout(() => {
        this.innerText = "Copy";
      }, 2000);
    });
  });
  // rate
  var ratingValue; 
  function openRatingBox() {
      var ratingBox = document.getElementById("ratingBox");
      ratingBox.style.display = "block";
  }
  function closeRatingBox() {
      var ratingBox = document.getElementById("ratingBox");
      ratingBox.style.display = "none";
      console.log("تم حفظ التقييم:", ratingValue);
  }
  element.checked = false;
function saveRating(element) {
  var ratingValue = element.value;
  localStorage.setItem("rating", ratingValue);
}
