        // Base de datos de carreras e información
        const careerDatabase = {
            "Ingeniería de Sistemas": {
                icon: "fas fa-laptop-code",
                description: "Diseño y desarrollo de sistemas de software y hardware",
                skills: ["matematicas", "logica", "tecnologia"],
                interests: ["tecnologia", "innovacion", "resolucion_problemas"],
                salary: "Alto",
                demand: "Muy Alta",
                image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150&h=150&fit=crop&crop=face"
            },
            "Medicina": {
                icon: "fas fa-user-md",
                description: "Diagnóstico, tratamiento y prevención de enfermedades",
                skills: ["ciencias", "memoria", "empatia"],
                interests: ["salud", "ayuda_social", "ciencia"],
                salary: "Muy Alto",
                demand: "Alta",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
            },
            "Psicología": {
                icon: "fas fa-brain",
                description: "Estudio del comportamiento y procesos mentales humanos",
                skills: ["comunicacion", "empatia", "analisis"],
                interests: ["psicologia", "ayuda_social", "investigacion"],
                salary: "Medio",
                demand: "Alta",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
            },
            "Administración de Empresas": {
                icon: "fas fa-chart-line",
                description: "Gestión y dirección de organizaciones empresariales",
                skills: ["liderazgo", "comunicacion", "matematicas"],
                interests: ["negocios", "liderazgo", "economia"],
                salary: "Alto",
                demand: "Alta",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            "Arquitectura": {
                icon: "fas fa-drafting-compass",
                description: "Diseño y construcción de espacios habitables",
                skills: ["creatividad", "matematicas", "espacial"],
                interests: ["arte", "construccion", "diseno"],
                salary: "Alto",
                demand: "Media",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            },
            "Derecho": {
                icon: "fas fa-balance-scale",
                description: "Interpretación y aplicación de leyes y normativas",
                skills: ["comunicacion", "memoria", "analisis"],
                interests: ["justicia", "debate", "lectura"],
                salary: "Alto",
                demand: "Media",
                image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face"
            },
            "Ingeniería Civil": {
                icon: "fas fa-hard-hat",
                description: "Diseño y construcción de infraestructura",
                skills: ["matematicas", "espacial", "logica"],
                interests: ["construccion", "matematicas", "ingenieria"],
                salary: "Alto",
                demand: "Alta",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            "Comunicación Social": {
                icon: "fas fa-microphone",
                description: "Creación y difusión de contenido mediático",
                skills: ["comunicacion", "creatividad", "escritura"],
                interests: ["comunicacion", "medios", "creatividad"],
                salary: "Medio",
                demand: "Media",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
            }
        };

        const interests = [
            {id: "tecnologia", name: "Tecnología", icon: "fas fa-microchip"},
            {id: "salud", name: "Salud", icon: "fas fa-heartbeat"},
            {id: "arte", name: "Arte", icon: "fas fa-palette"},
            {id: "ciencia", name: "Ciencia", icon: "fas fa-flask"},
            {id: "negocios", name: "Negocios", icon: "fas fa-briefcase"},
            {id: "educacion", name: "Educación", icon: "fas fa-chalkboard-teacher"},
            {id: "deportes", name: "Deportes", icon: "fas fa-running"},
            {id: "musica", name: "Música", icon: "fas fa-music"},
            {id: "ambiente", name: "Medio Ambiente", icon: "fas fa-leaf"},
            {id: "ayuda_social", name: "Ayuda Social", icon: "fas fa-hands-helping"},
            {id: "investigacion", name: "Investigación", icon: "fas fa-search"},
            {id: "liderazgo", name: "Liderazgo", icon: "fas fa-users"}
        ];

        const skills = [
            {id: "matematicas", name: "Matemáticas"},
            {id: "ciencias", name: "Ciencias Naturales"},
            {id: "comunicacion", name: "Comunicación"},
            {id: "creatividad", name: "Creatividad"},
            {id: "liderazgo", name: "Liderazgo"},
            {id: "logica", name: "Pensamiento Lógico"},
            {id: "memoria", name: "Memoria"},
            {id: "empatia", name: "Empatía"},
            {id: "analisis", name: "Análisis Crítico"},
            {id: "espacial", name: "Visión Espacial"}
        ];

        let userData = {
            personal: {},
            interests: [],
            skills: {}
        };

        // Inicializar la aplicación
        function initApp() {
            generateInterestGrid();
            generateSkillsGrid();
        }

        function generateInterestGrid() {
            const grid = document.getElementById('interestGrid');
            grid.innerHTML = '';
            
            interests.forEach(interest => {
                const col = document.createElement('div');
                col.className = 'col-md-4 col-sm-6';
                col.innerHTML = `
                    <div class="interest-card" onclick="toggleInterest('${interest.id}')">
                        <i class="${interest.icon} interest-icon"></i>
                        <h6>${interest.name}</h6>
                    </div>
                `;
                grid.appendChild(col);
            });
        }

        function generateSkillsGrid() {
            const grid = document.getElementById('skillsGrid');
            grid.innerHTML = '';
            
            skills.forEach(skill => {
                const skillDiv = document.createElement('div');
                skillDiv.className = 'row mb-3 align-items-center';
                skillDiv.innerHTML = `
                    <div class="col-md-4">
                        <label class="form-label">${skill.name}</label>
                    </div>
                    <div class="col-md-8">
                        <input type="range" class="form-range" min="1" max="5" value="3" 
                               id="skill_${skill.id}" onchange="updateSkillValue('${skill.id}', this.value)">
                        <div class="d-flex justify-content-between">
                            <small>Básico</small>
                            <small id="value_${skill.id}">Intermedio</small>
                            <small>Experto</small>
                        </div>
                    </div>
                `;
                grid.appendChild(skillDiv);
            });
        }

        function toggleInterest(interestId) {
            const card = event.currentTarget;
            const index = userData.interests.indexOf(interestId);
            
            if (index > -1) {
                userData.interests.splice(index, 1);
                card.classList.remove('selected');
            } else if (userData.interests.length < 5) {
                userData.interests.push(interestId);
                card.classList.add('selected');
            } else {
                alert('Puedes seleccionar máximo 5 intereses');
            }
        }

        function updateSkillValue(skillId, value) {
            userData.skills[skillId] = parseInt(value);
            const labels = ['', 'Básico', 'Principiante', 'Intermedio', 'Avanzado', 'Experto'];
            document.getElementById(`value_${skillId}`).textContent = labels[value];
        }

        function nextSection(sectionNum) {
            // Validar sección actual
            if (sectionNum === 2) {
                if (!validatePersonalInfo()) return;
            } else if (sectionNum === 3) {
                if (userData.interests.length === 0) {
                    alert('Por favor selecciona al menos un interés');
                    return;
                }
            }

            // Ocultar sección actual y mostrar siguiente
            document.querySelectorAll('.form-section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
            });
            
            document.getElementById(`section${sectionNum}`).classList.add('active');
            document.getElementById(`step${sectionNum}`).classList.add('active');
        }

        function prevSection(sectionNum) {
            document.querySelectorAll('.form-section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
            });
            
            document.getElementById(`section${sectionNum}`).classList.add('active');
            document.getElementById(`step${sectionNum}`).classList.add('active');
        }

        function validatePersonalInfo() {
            const nombre = document.getElementById('nombre').value;
            const edad = document.getElementById('edad').value;
            const promedio = document.getElementById('promedio').value;
            const especializacion = document.getElementById('especializacion').value;

            if (!nombre || !edad || !promedio || !especializacion) {
                alert('Por favor completa toda la información personal');
                return false;
            }

            userData.personal = {nombre, edad, promedio, especializacion};
            return true;
        }

        function generateRecommendations() {
            // Mostrar spinner
            nextSection(4);
            document.getElementById('loadingSpinner').style.display = 'block';
            
            // Simular procesamiento
            setTimeout(() => {
                const recommendations = calculateRecommendations();
                displayRecommendations(recommendations);
                
                document.getElementById('loadingSpinner').style.display = 'none';
                document.getElementById('recommendationsContainer').style.display = 'block';
            }, 3000);
        }

        function calculateRecommendations() {
            const recommendations = [];
            
            Object.keys(careerDatabase).forEach(career => {
                const careerData = careerDatabase[career];
                let score = 0;
                let matchReasons = [];

                // Algoritmo basado en contenido (intereses)
                const interestMatch = careerData.interests.filter(interest => 
                    userData.interests.includes(interest)
                ).length;
                score += interestMatch * 20;
                if (interestMatch > 0) {
                    matchReasons.push(`Basado en contenido: ${interestMatch} intereses coinciden`);
                }

                // Algoritmo basado en habilidades
                const skillMatch = careerData.skills.reduce((sum, skill) => {
                    return sum + (userData.skills[skill] || 0);
                }, 0) / careerData.skills.length;
                score += skillMatch * 15;
                if (skillMatch > 3) {
                    matchReasons.push(`Basado en conocimiento: Habilidades compatibles`);
                }

                // Algoritmo colaborativo (simulado basado en especialización)
                if (userData.personal.especializacion === 'ciencias' && 
                    ['Medicina', 'Ingeniería de Sistemas', 'Ingeniería Civil'].includes(career)) {
                    score += 25;
                    matchReasons.push('Filtrado colaborativo: Estudiantes similares eligieron esta carrera');
                }

                // Algoritmo híbrido (combinación de factores)
                if (userData.personal.promedio === 'excelente' && careerData.salary === 'Muy Alto') {
                    score += 15;
                    matchReasons.push('Sistema híbrido: Perfil académico compatible');
                }

                if (score > 30) {
                    recommendations.push({
                        career,
                        data: careerData,
                        score,
                        matchReasons
                    });
                }
            });

            return recommendations.sort((a, b) => b.score - a.score).slice(0, 5);
        }

        function displayRecommendations(recommendations) {
            const container = document.getElementById('recommendationsList');
            container.innerHTML = '';

            if (recommendations.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-5">
                        <i class="fas fa-search fa-3x text-muted mb-3"></i>
                        <h4>No encontramos recomendaciones específicas</h4>
                        <p>Intenta ajustar tus respuestas o consulta con un orientador vocacional</p>
                    </div>
                `;
                return;
            }

            recommendations.forEach((rec, index) => {
                const percentage = Math.min(rec.score, 100);
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
                
                const card = document.createElement('div');
                card.className = 'recommendation-card';
                card.innerHTML = `
                    <div class="d-flex align-items-start">
                        <img src="${rec.data.image}" alt="${rec.career}" class="career-image">
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <h4 class="mb-1">
                                        ${medal} ${rec.career}
                                        <i class="${rec.data.icon} ms-2 text-primary"></i>
                                    </h4>
                                    <div class="recommendation-type mb-2">
                                        Compatibilidad: ${percentage.toFixed(0)}%
                                    </div>
                                </div>
                                <div class="text-end">
                                    <span class="badge bg-success">${rec.data.demand} Demanda</span>
                                </div>
                            </div>
                            
                            <p class="text-muted mb-3">${rec.data.description}</p>
                            
                            <div class="progress-custom mb-3">
                                <div class="progress-bar-custom" style="width: ${percentage}%"></div>
                            </div>
                            
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <strong>💰 Salario esperado:</strong> ${rec.data.salary}
                                </div>
                                <div class="col-md-6">
                                    <strong>📈 Demanda laboral:</strong> ${rec.data.demand}
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <strong>🎯 Habilidades clave:</strong><br>
                                ${rec.data.skills.map(skill => {
                                    const skillName = skills.find(s => s.id === skill)?.name || skill;
                                    return `<span class="skill-tag">${skillName}</span>`;
                                }).join('')}
                            </div>
                            
                            <div class="mb-3">
                                <strong>🔍 Por qué te recomendamos esta carrera:</strong>
                                <ul class="mt-2">
                                    ${rec.matchReasons.map(reason => `<li>${reason}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="d-flex gap-2">
                                <button class="btn btn-outline-primary btn-sm" onclick="showCareerDetails('${rec.career}')">
                                    <i class="fas fa-info-circle me-1"></i>Más información
                                </button>
                                <button class="btn btn-outline-success btn-sm" onclick="saveCareer('${rec.career}')">
                                    <i class="fas fa-bookmark me-1"></i>Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function showCareerDetails(careerName) {
            const career = careerDatabase[careerName];
            if (!career) return;
            
            const modal = document.createElement('div');
            modal.className = 'modal fade';
            modal.id = 'careerModal';
            modal.innerHTML = `
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style="background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); color: white;">
                            <h5 class="modal-title">
                                <i class="${career.icon} me-2"></i>${careerName}
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-4 text-center mb-3">
                                    <img src="${career.image}" alt="${careerName}" 
                                         class="img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover;">
                                </div>
                                <div class="col-md-8">
                                    <h6>Descripción:</h6>
                                    <p>${career.description}</p>
                                    
                                    <h6>Perfil del egresado:</h6>
                                    <p>Un profesional capacitado para ${career.description.toLowerCase()}, 
                                    con sólidos conocimientos en ${career.skills.join(', ')} y 
                                    orientado hacia ${career.interests.join(', ')}.</p>
                                    
                                    <h6>Campo laboral:</h6>
                                    <ul>
                                        ${getFieldsForCareer(careerName).map(field => `<li>${field}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                            
                            <hr>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>💼 Expectativas salariales:</h6>
                                    <p>${getSalaryDetails(career.salary)}</p>
                                </div>
                                <div class="col-md-6">
                                    <h6>📊 Perspectivas laborales:</h6>
                                    <p>${getDemandDetails(career.demand)}</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onclick="saveCareer('${careerName}')">
                                <i class="fas fa-bookmark me-1"></i>Guardar carrera
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
            
            modal.addEventListener('hidden.bs.modal', () => {
                document.body.removeChild(modal);
            });
        }

        function getFieldsForCareer(careerName) {
            const fields = {
                "Ingeniería de Sistemas": [
                    "Desarrollo de software", "Consultoría tecnológica", "Gestión de proyectos TI",
                    "Ciberseguridad", "Inteligencia artificial", "Emprendimiento tecnológico"
                ],
                "Medicina": [
                    "Medicina general", "Especialidades médicas", "Investigación médica",
                    "Salud pública", "Medicina preventiva", "Telemedicina"
                ],
                "Psicología": [
                    "Psicología clínica", "Psicología organizacional", "Psicología educativa",
                    "Investigación psicológica", "Terapia familiar", "Neuropsicología"
                ],
                "Administración de Empresas": [
                    "Gestión empresarial", "Consultoría", "Marketing", "Recursos humanos",
                    "Finanzas corporativas", "Emprendimiento"
                ],
                "Arquitectura": [
                    "Diseño arquitectónico", "Urbanismo", "Restauración", "Arquitectura sostenible",
                    "Gestión de proyectos", "Consultoría en construcción"
                ],
                "Derecho": [
                    "Litigio civil y penal", "Asesoría jurídica", "Derecho corporativo",
                    "Magistratura", "Docencia jurídica", "Mediación y arbitraje"
                ],
                "Ingeniería Civil": [
                    "Construcción", "Supervisión de obras", "Consultoría estructural",
                    "Gestión de proyectos", "Ingeniería vial", "Ingeniería hidráulica"
                ],
                "Comunicación Social": [
                    "Periodismo", "Publicidad", "Relaciones públicas", "Producción audiovisual",
                    "Marketing digital", "Comunicación corporativa"
                ]
            };
            return fields[careerName] || ["Campo laboral amplio y diverso"];
        }

        function getSalaryDetails(level) {
            const details = {
                "Muy Alto": "Salarios iniciales de $1,200-2,000 USD, con potencial de growth significativo",
                "Alto": "Salarios iniciales de $800-1,500 USD, buenas perspectivas de crecimiento",
                "Medio": "Salarios iniciales de $500-1,000 USD, crecimiento gradual con experiencia"
            };
            return details[level] || "Información salarial variable";
        }

        function getDemandDetails(level) {
            const details = {
                "Muy Alta": "Excelentes oportunidades laborales, mercado en crecimiento constante",
                "Alta": "Buenas oportunidades de empleo, sector estable y en desarrollo",
                "Media": "Oportunidades moderadas, requiere especialización para destacar"
            };
            return details[level] || "Demanda laboral estándar";
        }

        function saveCareer(careerName) {
            // Simular guardado de carrera
            const savedCareers = JSON.parse(localStorage.getItem('savedCareers') || '[]');
            if (!savedCareers.includes(careerName)) {
                savedCareers.push(careerName);
                localStorage.setItem('savedCareers', JSON.stringify(savedCareers));
                
                // Mostrar notificación
                showNotification(`✅ ${careerName} guardada en tus favoritos`, 'success');
            } else {
                showNotification(`ℹ️ ${careerName} ya está en tus favoritos`, 'info');
            }
        }

        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `alert alert-${type} position-fixed`;
            notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
            notification.innerHTML = `
                ${message}
                <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 5000);
        }

        function exportResults() {
            const results = {
                usuario: userData.personal.nombre,
                fecha: new Date().toLocaleDateString(),
                perfil: userData,
                recomendaciones: calculateRecommendations()
            };
            
            const dataStr = JSON.stringify(results, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `recomendaciones_${userData.personal.nombre || 'usuario'}.json`;
            link.click();
            
            URL.revokeObjectURL(url);
            showNotification('📄 Resultados exportados exitosamente', 'success');
        }

        function resetForm() {
            userData = {
                personal: {},
                interests: [],
                skills: {}
            };
            
            // Limpiar formularios
            document.querySelectorAll('input, select').forEach(input => {
                if (input.type === 'range') {
                    input.value = 3;
                } else {
                    input.value = '';
                }
            });
            
            // Remover selecciones de intereses
            document.querySelectorAll('.interest-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Resetear valores de habilidades
            skills.forEach(skill => {
                const valueLabel = document.getElementById(`value_${skill.id}`);
                if (valueLabel) valueLabel.textContent = 'Intermedio';
            });
            
            // Volver a la primera sección
            nextSection(1);
            
            showNotification('🔄 Formulario reiniciado', 'info');
        }

        // Funciones de navegación mejoradas
        function updateStepIndicator(activeStep) {
            document.querySelectorAll('.step').forEach((step, index) => {
                if (index + 1 <= activeStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
        }

        // Validaciones mejoradas
        function validateCurrentSection(sectionNum) {
            switch(sectionNum) {
                case 1:
                    return validatePersonalInfo();
                case 2:
                    if (userData.interests.length === 0) {
                        showNotification('⚠️ Selecciona al menos un interés', 'warning');
                        return false;
                    }
                    return true;
                case 3:
                    const hasSkills = Object.keys(userData.skills).length > 0;
                    if (!hasSkills) {
                        showNotification('⚠️ Evalúa al menos una habilidad', 'warning');
                        return false;
                    }
                    return true;
                default:
                    return true;
            }
        }

        // Inicializar la aplicación cuando se carga la página
        document.addEventListener('DOMContentLoaded', function() {
            initApp();
            
            // Configurar los sliders de habilidades
            skills.forEach(skill => {
                const slider = document.getElementById(`skill_${skill.id}`);
                if (slider) {
                    slider.addEventListener('input', function() {
                        updateSkillValue(skill.id, this.value);
                    });
                    // Inicializar con valor por defecto
                    updateSkillValue(skill.id, 3);
                }
            });
            
            // Añadir efectos de hover a las tarjetas
            document.addEventListener('mouseover', function(e) {
                if (e.target.closest('.custom-card')) {
                    e.target.closest('.custom-card').style.transform = 'translateY(-2px)';
                }
            });
            
            document.addEventListener('mouseout', function(e) {
                if (e.target.closest('.custom-card')) {
                    e.target.closest('.custom-card').style.transform = 'translateY(0)';
                }
            });
        });

        // Función para hacer la experiencia más interactiva
        function addInteractiveEffects() {
            // Efecto de typing para el título
            const title = document.querySelector('.header h1');
            if (title) {
                title.style.opacity = '0';
                setTimeout(() => {
                    title.style.transition = 'opacity 1s ease-in';
                    title.style.opacity = '1';
                }, 100);
            }
            
            // Animación para las tarjetas de interés
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                        entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.interest-card, .custom-card').forEach(card => {
                observer.observe(card);
            });
        }

        // Llamar a los efectos interactivos después de un breve delay
        setTimeout(addInteractiveEffects, 500);
