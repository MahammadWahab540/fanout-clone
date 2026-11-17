import{i as e,n as t}from"./rolldown-runtime-BgaNhQyE.js";import{t as n}from"./react-C65L1HE3.js";import{i as r,t as i}from"./dist-BXxUuVPX.js";import{t as a}from"./jsx-runtime-CIkHs51R.js";import{g as o,t as s}from"./brand-C2gbhl7g.js";import{t as c}from"./PhIcon-C8YzW2Wq.js";import{C as l,D as u,E as d,F as f,G as p,H as ee,I as m,K as h,L as g,O as _,R as v,S as te,T as ne,U as y,W as re,_ as b,b as x,c as ie,d as S,f as ae,g as oe,h as se,i as C,j as ce,k as w,l as le,m as ue,n as T,o as E,q as de,r as fe,s as D,t as O,v as pe,x as k,y as me,z as he}from"./three.module-DVpfVTk6.js";import{r as A,t as ge}from"./OrbitControls-BWPdTe0f.js";import{n as _e,t as ve}from"./Seo-CeJeW5yt.js";import{n as ye,t as be}from"./MathFormula-Dnumba2z.js";import{a as xe,c as Se,i as j,o as M,t as N}from"./LabPlayground-BuEWQZGR.js";import{n as Ce,t as P}from"./LabTactileSlider-DoaMFYc8.js";var F,I,we,L=t((()=>{C(),F=new E,I=new p,we=class extends me{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new ue([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new ue([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new x(t,6,1);return this.setAttribute(`instanceStart`,new k(n,3,0)),this.setAttribute(`instanceEnd`,new k(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new x(t,6,1);return this.setAttribute(`instanceColorStart`,new k(n,3,0)),this.setAttribute(`instanceColorEnd`,new k(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new de(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new E);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),F.setFromBufferAttribute(t),this.boundingBox.union(F))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new v),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)I.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(I)),I.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(I));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}}})),R,z=t((()=>{C(),T.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new re},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},O.line={uniforms:y.merge([T.common,T.fog,T.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`},R=class extends g{constructor(e){super({type:`LineMaterial`,uniforms:y.clone(O.line.uniforms),vertexShader:O.line.vertexShader,fragmentShader:O.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}}}));function Te(e,t,n){return W.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),W.multiplyScalar(1/W.w),W.x=K/n.width,W.y=K/n.height,W.applyMatrix4(e.projectionMatrixInverse),W.multiplyScalar(1/W.w),Math.abs(Math.max(W.x,W.y))}function Ee(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){U.start.fromBufferAttribute(i,r),U.end.fromBufferAttribute(a,r),U.applyMatrix4(n);let o=new p,s=new p;G.distanceSqToSegment(U.start,U.end,s,o),s.distanceTo(o)<K*.5&&t.push({point:s,pointOnLine:o,distance:G.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function De(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;G.at(1,H),H.w=1,H.applyMatrix4(t.matrixWorldInverse),H.applyMatrix4(r),H.multiplyScalar(1/H.w),H.x*=i.x/2,H.y*=i.y/2,H.z=0,je.copy(H),Me.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(B.fromBufferAttribute(s,t),V.fromBufferAttribute(c,t),B.w=1,V.w=1,B.applyMatrix4(Me),V.applyMatrix4(Me),B.z>u&&V.z>u)continue;if(B.z>u){let e=B.z-V.z,t=(B.z-u)/e;B.lerp(V,t)}else if(V.z>u){let e=V.z-B.z,t=(V.z-u)/e;V.lerp(B,t)}B.applyMatrix4(r),V.applyMatrix4(r),B.multiplyScalar(1/B.w),V.multiplyScalar(1/V.w),B.x*=i.x/2,B.y*=i.y/2,V.x*=i.x/2,V.y*=i.y/2,U.start.copy(B),U.start.z=0,U.end.copy(V),U.end.z=0;let o=U.closestPointToPointParameter(je,!0);U.at(o,Ne);let l=ne.lerp(B.z,V.z,o),d=l>=-1&&l<=1,f=je.distanceTo(Ne)<K*.5;if(d&&f){U.start.fromBufferAttribute(s,t),U.end.fromBufferAttribute(c,t),U.start.applyMatrix4(a),U.end.applyMatrix4(a);let r=new p,i=new p;G.distanceSqToSegment(U.start,U.end,i,r),n.push({point:i,pointOnLine:r,distance:G.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Oe,ke,Ae,B,V,H,je,Me,U,Ne,Pe,Fe,W,G,K,Ie,Le=t((()=>{C(),L(),z(),Oe=new h,ke=new p,Ae=new p,B=new h,V=new h,H=new h,je=new p,Me=new d,U=new l,Ne=new p,Pe=new E,Fe=new v,W=new h,Ie=class extends u{constructor(e=new we,t=new R({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)ke.fromBufferAttribute(t,e),Ae.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+ke.distanceTo(Ae);let i=new x(r,2,1);return e.setAttribute(`instanceDistanceStart`,new k(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new k(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;G=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;K=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Fe.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?K*.5:Te(r,Math.max(r.near,Fe.distanceToPoint(G.origin)),s.resolution),Fe.radius+=c,G.intersectsSphere(Fe)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Pe.copy(o.boundingBox).applyMatrix4(a);let l;l=n?K*.5:Te(r,Math.max(r.near,Pe.distanceToPoint(G.origin)),s.resolution),Pe.expandByScalar(l),G.intersectsBox(Pe)!==!1&&(n?Ee(this,t):De(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Oe),this.material.uniforms.resolution.value.set(Oe.z,Oe.w))}}})),Re,ze=t((()=>{L(),Re=class extends we{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let r=0;r<t;r++)n[6*r]=e[r].x,n[6*r+1]=e[r].y,n[6*r+2]=e[r].z||0,n[6*r+3]=e[r+1].x,n[6*r+4]=e[r+1].y,n[6*r+5]=e[r+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}})),Be,Ve=t((()=>{Le(),ze(),z(),Be=class extends Ie{constructor(e=new Re,t=new R({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}}}));function He(e=-35){return{theta:e/J,omega:0,integral:0,leftPwm:q,rightPwm:q,control:0}}function Ue(e,t=-35){e.theta=t/J,e.omega=0,e.integral=0,e.leftPwm=q,e.rightPwm=q,e.control=0}function We(e,t){e.omega+=t/J}function Ge(e){return((e+180)%360+360)%360-180}function Ke(e,t,n){return Math.min(n,Math.max(t,e))}function qe(e,t){let n=nt,r=e.theta*J,i=Ge(t.setpointDeg-Ge(r)),a=0;t.pidEnabled?(e.integral=Ke(e.integral+i*n,-100,et),a=t.kp*i+t.ki*e.integral+t.kd*-(e.omega*J)):e.integral=0,e.control=a,e.leftPwm=Ke(t.throttle-a,q,tt),e.rightPwm=Ke(t.throttle+a,q,tt);let o=(1-t.imbalance)*Qe*(e.leftPwm-q),s=Qe*(e.rightPwm-q),c=Ze*(s-o)-$e*e.omega;e.omega+=c/Xe*n,e.theta+=e.omega*n}function Je(e,t,n){let r=Math.min(n,.1);for(;r>=nt;)qe(e,t),r-=nt;return r}function Ye(e,t){let n=Ge(e.theta*J);return{angleDeg:n,omegaDeg:e.omega*J,errorDeg:Ge(t.setpointDeg-n),integral:e.integral,leftPwm:e.leftPwm,rightPwm:e.rightPwm,control:e.control}}var Xe,Ze,Qe,$e,et,q,tt,J,nt,rt,it=t((()=>{Xe=.05,Ze=.5,Qe=.004,$e=.012,et=100,q=1e3,tt=2e3,J=180/Math.PI,nt=1/240,rt={kp:4,ki:.8,kd:1.2,setpointDeg:0,throttle:1500,imbalance:.08,pidEnabled:!0}}));function Y(e,t){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()||t}function at(e,t,n){let r=new Float32Array(X*3),i=[],a=new le(t).convertLinearToSRGB(),o=new le(n).convertLinearToSRGB(),s=new le;for(let e=0;e<X;e++)s.lerpColors(a,o,.72*(e/(X-1))**1.4).convertSRGBToLinear(),i.push(s.r,s.g,s.b);let c=new Re,l=new R({vertexColors:!0,linewidth:4,worldUnits:!1}),u=new Be(c,l);u.frustumCulled=!1,u.visible=!1,e.add(u);let d=[],f=!1;return{material:l,push(e){if(f)d.pop(),d.unshift(e.clone());else{for(let t=0;t<X;t++)d[t]=e.clone();c.setColors(i),f=!0,u.visible=!0}for(let e=0;e<X;e++)r[e*3]=d[e].x,r[e*3+1]=d[e].y,r[e*3+2]=d[e].z;c.setPositions(r)},clear(){d.length=0,f=!1,u.visible=!1}}}function ot({paramsRef:e,simRef:t,runningRef:n,handlesRef:r,onTelemetry:i}){let a=(0,st.useRef)(null),o=(0,st.useRef)(i);return o.current=i,(0,st.useEffect)(()=>{let i=a.current;if(!i)return;let s={bg:Y(`--ga-bg`,`#FBFBFB`),surface:Y(`--ga-surface`,`#FFFFFF`),chip:Y(`--ga-chip`,`#F3F3F3`),divider:Y(`--ga-divider`,`#E9E9E9`),border:Y(`--ga-border`,`#E1E1E1`),borderStrong:Y(`--ga-border-strong`,`#CFCFCF`),fg2:Y(`--ga-fg2`,`#929292`),fg3:Y(`--ga-fg3`,`#ADADAD`),ink:Y(`--ga-ink-900`,`#1D1D1D`),purple:Y(`--ga-cat-purple`,`#6E56CF`),blue:Y(`--ga-cat-blue`,`#2F7CF6`),red:Y(`--ga-cat-red`,`#E4402C`),orange:Y(`--ga-cat-orange`,`#E8822A`),green:Y(`--ga-cat-green`,`#2AB673`)},c=new fe({antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=2,i.appendChild(c.domElement),c.domElement.style.display=`block`;let l=new m;l.background=new le(s.bg),l.fog=new se(s.bg,10,26);let d=new ce(38,1,.1,60);d.position.set(3,2,3.7);let h=new ge(d,c.domElement);h.target.set(0,Z,0),h.enableDamping=!0,h.dampingFactor=.08,h.enablePan=!1,h.minDistance=2.2,h.maxDistance=12,h.maxPolarAngle=Math.PI*.52,l.add(new pe(s.surface,s.border,1.15));let g=new ae(s.surface,2.1);g.position.set(4,7,3),g.castShadow=!0,g.shadow.mapSize.set(2048,2048),g.shadow.camera.left=-6,g.shadow.camera.right=6,g.shadow.camera.top=6,g.shadow.camera.bottom=-6,l.add(g);let v=new u(new ie(22,64),new w({color:s.chip,roughness:1}));v.rotation.x=-Math.PI/2,v.receiveShadow=!0,l.add(v);let ne=new oe(44,88,s.border,s.divider);ne.position.y=.001,l.add(ne);let y=new w({color:s.ink,roughness:.55,metalness:.2}),re=[];function x(e,t,n,r,i){let a=new b;a.position.set(e,0,t),a.rotation.y=n,a.scale.setScalar(i);let o=new D(1.06,.03,.05);for(let e of[Math.PI/4,-Math.PI/4]){let t=new u(o,y);t.rotation.y=e,t.position.y=.1,t.castShadow=!0,a.add(t)}let s=new u(new D(.3,.12,.36),new w({color:r,roughness:.5}));s.position.y=.15,s.castShadow=!0,a.add(s);let c=new u(new he(.085,16,16,0,Math.PI*2,0,Math.PI/2),y);c.position.y=.21,a.add(c);for(let e of[-1,1]){let t=new u(new D(.03,.1,.3),y);t.position.set(e*.16,.05,0),a.add(t)}let d=.53*Math.SQRT1_2;for(let[e,t]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let n=new u(new S(.03,.036,.07,12),y);n.position.set(e*d,.13,t*d),n.castShadow=!0,a.add(n);let r=new b;r.position.set(e*d,.175,t*d);let i=new D(.32,.006,.03),o=new u(i,y),s=new u(i,y);s.rotation.y=Math.PI/2,r.add(o,s),a.add(r),re.push(r)}l.add(a)}function C(e,t){let n=new u(new S(.85,.85,.015,48),new w({color:s.surface,roughness:1}));n.position.set(e,.008,t),n.receiveShadow=!0,l.add(n);let r=new u(new f(.62,.72,48),new _({color:s.borderStrong,side:2}));r.rotation.x=-Math.PI/2,r.position.set(e,.02,t),l.add(r)}function ue(e,t,n,r,i){let a=new u(new D(i,i,i),new w({color:r,roughness:.85}));a.position.set(e,i/2,t),a.rotation.y=n,a.castShadow=!0,a.receiveShadow=!0,l.add(a)}C(-3.1,-2.4),C(2.9,2.3),x(-3.1,-2.4,.6,s.purple,.9),x(2.9,2.3,-1.1,s.blue,.85),x(3.2,-2.9,2.2,s.fg2,1.05),x(-2.6,2.8,1.7,s.red,.7),x(-4.4,.7,-.4,s.fg3,.8),x(1.7,-4.2,.2,s.orange,.75),ue(1.5,2.9,.4,s.orange,.44),ue(-1.9,-3.2,-.3,s.borderStrong,.4),ue(-2.2,-2.85,.7,s.fg3,.3);let T=new u(new S(.42,.5,.09,48),y);T.position.y=.045,T.castShadow=!0,l.add(T);let E=new u(new S(.055,.075,Z-.09,24),y);E.position.y=.6199999999999999,E.castShadow=!0,l.add(E);let de=new u(new S(.045,.045,.3,24),y);de.rotation.x=Math.PI/2,de.position.y=Z,l.add(de);let O=new b;O.position.y=Z;let k=new u(new S(.012,.012,2.3000000000000003,12),new _({color:s.fg3,transparent:!0,opacity:.55}));k.rotation.z=Math.PI/2,O.add(k);let me=new u(new he(.035,16,16),new _({color:s.fg2,transparent:!0,opacity:.7}));me.position.x=1.1500000000000001,O.add(me),l.add(O);let A=new b;A.position.y=Z,l.add(A);let _e=new u(new S(.035,.035,ut*2,20),new w({color:s.purple,roughness:.4}));_e.rotation.z=Math.PI/2,_e.castShadow=!0,A.add(_e);let ve=new u(new D(.34,.13,.2),y);ve.castShadow=!0,A.add(ve);let ye=new u(new D(.22,.02,.15),new w({color:s.purple,roughness:.4}));ye.position.y=.075,A.add(ye);let be=new u(new he(.05,16,16),new w({color:s.borderStrong,roughness:.3,metalness:.4}));be.position.set(0,-.085,.07),A.add(be);let xe=new u(new he(.02,12,12),new _({color:s.ink}));xe.position.set(0,-.09,.115),A.add(xe);let Se=new u(new he(.016,12,12),new _({color:s.green}));Se.position.set(0,.095,-.06),A.add(Se);let j=new u(new S(.005,.005,.16,8),y);j.position.set(.06,.16,-.05),A.add(j);function M(e,t){let n=new b;n.position.x=e*ut;let r=new u(new S(.06,.07,.12,20),y);r.position.y=.05,r.castShadow=!0,n.add(r);let i=new u(new S(.062,.062,.025,20),new w({color:t,roughness:.45}));i.position.y=.02,n.add(i);let a=new u(new ee(.28,.018,12,40),y);a.rotation.x=Math.PI/2,a.position.y=.125,a.castShadow=!0,n.add(a);let o=new b;o.position.y=.125;let c=new w({color:s.ink,roughness:.6}),l=new D(.5,.008,.045),d=new u(l,c);d.castShadow=!0;let f=new u(l,c);f.rotation.y=Math.PI/2,f.castShadow=!0,o.add(d,f);let p=new u(new ie(.26,32),new _({color:t,transparent:!0,opacity:0,side:2,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.y=.125,n.add(o,p),A.add(n),{pod:n,prop:o,disc:p}}let N=M(-1,s.blue),Ce=M(1,s.red),P=at(l,s.blue,s.bg),F=at(l,s.red,s.bg);r.current={clearTrails(){P.clear(),F.clear()}};let I=()=>{let e=i.clientWidth,t=i.clientHeight;!e||!t||(c.setSize(e,t,!1),d.aspect=e/t,d.updateProjectionMatrix(),P.material.resolution.set(e,t),F.material.resolution.set(e,t))};I();let we=new ResizeObserver(I);we.observe(i);let L=new p,R=0,z=performance.now(),Te=0,Ee=0,De=r=>{R=requestAnimationFrame(De);let i=Math.min((r-z)/1e3,.25);z=r;let a=e.current,s=t.current;for(let e=0;e<re.length;e++)re[e].rotation.y+=i*(1.6+e%4*.8);n.current&&(Te=Je(s,a,i+Te),N.prop.rotation.y+=(s.leftPwm-1e3)*.045*i,Ce.prop.rotation.y-=(s.rightPwm-1e3)*.045*i,N.disc.material.opacity=.36*((s.leftPwm-1e3)/1e3),Ce.disc.material.opacity=.36*((s.rightPwm-1e3)/1e3),A.rotation.z=s.theta,N.pod.getWorldPosition(L),P.push(L),Ce.pod.getWorldPosition(L),F.push(L)),O.rotation.z=a.setpointDeg*Math.PI/180,Ee+=i,Ee>=lt&&(Ee=0,o.current(Ye(s,a))),h.update(),c.render(l,d)};return R=requestAnimationFrame(De),()=>{cancelAnimationFrame(R),we.disconnect(),h.dispose(),r.current=null,l.traverse(e=>{if(e instanceof u||e instanceof te){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}}),c.dispose(),c.domElement.remove()}},[]),(0,ct.jsx)(`div`,{ref:a,className:`absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full`,"aria-label":`3D view of a twin-rotor balance drone on a pedestal, surrounded by parked quadcopters`,role:`img`})}var st,ct,X,lt,ut,Z,dt=t((()=>{st=e(n(),1),C(),A(),Ve(),ze(),z(),it(),ct=a(),X=280,lt=.1,ut=1.05,Z=1.15}));function ft({label:e,value:t,fraction:n,color:r}){let i=Math.min(1,Math.max(0,n))*100;return(0,$.jsxs)(`div`,{className:`grid grid-cols-[minmax(5.5rem,0.34fr)_minmax(0,1fr)_4.25rem] items-center gap-3`,children:[(0,$.jsx)(`span`,{className:`text-sm font-medium`,children:e}),(0,$.jsx)(`div`,{className:`h-2.5 rounded-full bg-[var(--ga-chip)]`,children:(0,$.jsx)(`div`,{className:`h-full rounded-full transition-[width] duration-100 ease-linear`,style:{width:`${i}%`,background:r??`var(--ga-fg1)`}})}),(0,$.jsx)(`span`,{className:`text-right font-mono text-sm font-semibold tabular-nums`,children:t})]})}function pt({label:e,value:t,fraction:n,color:r}){let i=Math.min(1,Math.max(-1,n)),a=Math.abs(i)*50;return(0,$.jsxs)(`div`,{className:`grid grid-cols-[minmax(5.5rem,0.34fr)_minmax(0,1fr)_4.25rem] items-center gap-3`,children:[(0,$.jsx)(`span`,{className:`text-sm font-medium`,children:e}),(0,$.jsxs)(`div`,{className:`relative h-2.5 rounded-full bg-[var(--ga-chip)]`,children:[(0,$.jsx)(`span`,{className:`absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ga-border-strong)]`}),(0,$.jsx)(`div`,{className:`absolute top-0 h-full transition-[width] duration-100 ease-linear`,style:{background:r??`var(--ga-fg1)`,width:`${a}%`,...i>=0?{left:`50%`,borderRadius:`0 9999px 9999px 0`}:{right:`50%`,borderRadius:`9999px 0 0 9999px`}}})]}),(0,$.jsx)(`span`,{className:`text-right font-mono text-sm font-semibold tabular-nums`,children:t})]})}function mt(){let[e,t]=(0,Q.useState)({...rt}),[n,i]=(0,Q.useState)(`pid`),[a,s]=(0,Q.useState)(!0),l=(0,Q.useRef)(He()),u=(0,Q.useRef)({...rt}),d=(0,Q.useRef)(!0),f=(0,Q.useRef)(null);(0,Q.useEffect)(()=>{u.current=e},[e]),(0,Q.useEffect)(()=>{d.current=a},[a]);let[p,ee]=(0,Q.useState)(()=>Ye(He(),rt)),m=e=>t(t=>({...t,...e})),h=e=>{i(`custom`),m(e)},g=e=>{let t=ht.find(t=>t.id===e);t&&(i(e),m({kp:t.kp,ki:t.ki,kd:t.kd,pidEnabled:!0}))},_=()=>{Ue(l.current),f.current?.clearTrails(),ee(Ye(l.current,u.current))},v=e.pidEnabled?Math.abs(p.omegaDeg)>260?{label:`unstable`,color:`var(--ga-cat-red)`}:Math.abs(p.errorDeg)<2&&Math.abs(p.omegaDeg)<6?{label:`on target`,color:`var(--ga-cat-green)`}:{label:`stabilizing`,color:`var(--ga-cat-purple)`}:{label:`manual`,color:`var(--ga-fg2)`},te=(0,Q.useMemo)(()=>{let t=e.kp*p.errorDeg,n=e.ki*p.integral,r=e.kd*-p.omegaDeg,i=e=>`${e<0?`−`:``}${Math.abs(e).toFixed(1)}`;return{line:`u = ${e.kp.toFixed(2)}·(${i(p.errorDeg)}) + ${e.ki.toFixed(2)}·(${i(p.integral)}) + ${e.kd.toFixed(2)}·(${i(-p.omegaDeg)}) = ${i(t+n+r)} µs`,errorLine:`e = ${i(e.setpointDeg)} − (${i(p.angleDeg)}) = ${i(p.errorDeg)}°`}},[e.kp,e.ki,e.kd,e.setpointDeg,p]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(ve,{title:`Open robot demo`,description:`A 3D twin-rotor balance drone stabilized by a PID controller you tune live. Change the gains, kick the rig, and watch the physics respond.`,path:`/tmp/open-robot-demo`,noindex:!0}),(0,$.jsxs)(`article`,{className:`mx-auto max-w-[88rem] px-5 py-8 sm:px-6 md:py-12`,style:{"--lab-accent":`var(--ga-cat-purple)`},children:[(0,$.jsxs)(`header`,{className:`grid gap-7 pb-9 lg:grid-cols-[1fr_auto] lg:items-end`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(r,{to:`/open-robotics`,className:`inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground no-underline transition-colors hover:text-foreground`,children:[(0,$.jsx)(c,{name:`arrow-left`,size:16}),`Open robotics`]}),(0,$.jsx)(`div`,{className:`mb-3 mt-5`,children:(0,$.jsx)(`span`,{className:`ga-mono-eyebrow`,children:`Fanout labs — robotics`})}),(0,$.jsx)(`h1`,{className:`max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl`,children:`Balance a twin-rotor drone with PID.`}),(0,$.jsx)(`p`,{className:`mt-4 max-w-3xl text-base leading-7 text-muted-foreground`,children:`A drone chassis with a ducted rotor at each end pivots on a test stand. A PID controller measures the tilt, compares it against your setpoint, and trims each motor to hold the rig steady. Tune the gains, kick the rig, and watch how each term earns its keep.`})]}),(0,$.jsx)(`div`,{className:`font-mono text-[11px] uppercase tracking-[0.07em] text-muted-foreground`,children:`1-dof birotor · 240 Hz fixed step`})]}),(0,$.jsx)(o,{label:`Playground`,width:420}),(0,$.jsxs)(`div`,{className:`py-9`,children:[(0,$.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[minmax(0,1fr)_21.5rem]`,children:[(0,$.jsxs)(`section`,{className:`grid-card relative overflow-hidden lg:flex lg:flex-col`,children:[(0,$.jsxs)(`div`,{className:`relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[40rem] lg:flex-1`,children:[(0,$.jsx)(ot,{paramsRef:u,simRef:l,runningRef:d,handlesRef:f,onTelemetry:ee}),(0,$.jsx)(`div`,{className:`pointer-events-none absolute left-4 top-4 rounded-lg bg-card/85 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.07em] shadow-[var(--ga-shadow-sm)] backdrop-blur-sm lg:left-5 lg:top-5`,children:(0,$.jsxs)(`div`,{className:`flex items-center gap-3 tabular-nums`,children:[(0,$.jsx)(`span`,{className:`text-muted-foreground`,children:`Angle`}),(0,$.jsxs)(`span`,{className:`text-sm font-semibold normal-case`,children:[p.angleDeg.toFixed(1),`°`]}),(0,$.jsx)(`span`,{className:`text-muted-foreground`,children:`Target`}),(0,$.jsxs)(`span`,{className:`text-sm font-semibold normal-case`,children:[e.setpointDeg.toFixed(1),`°`]}),(0,$.jsx)(`span`,{style:{color:v.color},children:v.label})]})}),(0,$.jsx)(`div`,{className:`pointer-events-none absolute bottom-4 right-4 hidden rounded-lg bg-card/85 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.07em] text-muted-foreground shadow-[var(--ga-shadow-sm)] backdrop-blur-sm sm:block lg:hidden`,children:`drag to orbit · scroll to zoom`})]}),(0,$.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 p-5 sm:px-7 lg:absolute lg:left-5 lg:top-[4.25rem] lg:max-w-[34rem] lg:p-0`,children:[(0,$.jsx)(N,{icon:`arrow-counter-clockwise`,variant:`secondary`,onClick:()=>We(l.current,gt),children:`Kick ccw`}),(0,$.jsx)(N,{icon:`arrow-clockwise`,variant:`secondary`,onClick:()=>We(l.current,-160),children:`Kick cw`}),(0,$.jsx)(N,{icon:a?`pause`:`play`,variant:`secondary`,onClick:()=>s(e=>!e),children:a?`Pause`:`Resume`}),(0,$.jsx)(N,{icon:`arrow-clockwise`,onClick:_,children:`Reset`})]}),(0,$.jsxs)(`div`,{className:`space-y-4 px-5 pb-6 sm:px-7 lg:absolute lg:bottom-5 lg:left-5 lg:w-[21rem] lg:rounded-xl lg:bg-card/90 lg:p-4 lg:pb-4 lg:shadow-[var(--ga-shadow-md)] lg:backdrop-blur-md`,children:[(0,$.jsx)(M,{icon:`engine`,children:`Motor mix`}),(0,$.jsx)(ft,{label:`Throttle`,value:e.throttle.toFixed(0),fraction:(e.throttle-1e3)/1e3}),(0,$.jsx)(ft,{label:`Left PWM`,value:p.leftPwm.toFixed(0),fraction:(p.leftPwm-1e3)/1e3,color:`var(--ga-cat-blue)`}),(0,$.jsx)(ft,{label:`Right PWM`,value:p.rightPwm.toFixed(0),fraction:(p.rightPwm-1e3)/1e3,color:`var(--ga-cat-red)`}),(0,$.jsx)(`div`,{className:`hidden pt-1 font-mono text-[10px] uppercase tracking-[0.07em] text-muted-foreground lg:block`,children:`drag to orbit · scroll to zoom`})]})]}),(0,$.jsxs)(j,{className:`space-y-6`,children:[(0,$.jsx)(M,{icon:`sliders-horizontal`,children:`Controller`}),(0,$.jsx)(xe,{label:`Control loop`,value:e.pidEnabled?`on`:`off`,options:[{value:`on`,label:`PID on`},{value:`off`,label:`Manual`}],onChange:e=>m({pidEnabled:e===`on`})}),(0,$.jsx)(xe,{label:`Preset`,value:n,options:[...ht.map(e=>({value:e.id,label:e.label})),{value:`custom`,label:`Custom`}],onChange:g}),(0,$.jsx)(P,{id:`drone-kp`,label:`Kp, proportional`,value:e.kp,min:0,max:10,step:.1,tickCount:21,compact:!0,formattedValue:e.kp.toFixed(1),onChange:e=>h({kp:e})}),(0,$.jsx)(P,{id:`drone-ki`,label:`Ki, integral`,value:e.ki,min:0,max:3,step:.05,tickCount:21,compact:!0,formattedValue:e.ki.toFixed(2),onChange:e=>h({ki:e})}),(0,$.jsx)(P,{id:`drone-kd`,label:`Kd, derivative`,value:e.kd,min:0,max:5,step:.05,tickCount:21,compact:!0,formattedValue:e.kd.toFixed(2),onChange:e=>h({kd:e})}),(0,$.jsx)(P,{id:`drone-setpoint`,label:`Setpoint`,value:e.setpointDeg,min:-60,max:60,step:.5,tickCount:25,compact:!0,formattedValue:`${e.setpointDeg.toFixed(1)}°`,onChange:e=>m({setpointDeg:e})}),(0,$.jsxs)(`div`,{className:`space-y-4 border-t border-border pt-5`,children:[(0,$.jsx)(M,{icon:`pulse`,children:`Loop state`}),(0,$.jsx)(pt,{label:`Error`,value:`${p.errorDeg.toFixed(1)}°`,fraction:p.errorDeg/90,color:`var(--ga-cat-purple)`}),(0,$.jsx)(pt,{label:`Integrated error`,value:p.integral.toFixed(1),fraction:p.integral/100,color:`var(--ga-cat-purple)`}),(0,$.jsx)(pt,{label:`Angular velocity`,value:`${p.omegaDeg.toFixed(0)}°/s`,fraction:p.omegaDeg/360}),(0,$.jsx)(pt,{label:`Control u`,value:`${p.control.toFixed(0)} µs`,fraction:p.control/500})]})]})]}),(0,$.jsxs)(`div`,{className:`mt-5 grid gap-5 lg:grid-cols-[1fr_1.5fr]`,children:[(0,$.jsxs)(j,{className:`space-y-6`,children:[(0,$.jsx)(M,{icon:`wrench`,children:`Rig`}),(0,$.jsx)(P,{id:`drone-throttle`,label:`Throttle`,help:`Base command both motors share, µs.`,value:e.throttle,min:1e3,max:2e3,step:10,tickCount:21,compact:!0,formattedValue:e.throttle.toFixed(0),onChange:e=>m({throttle:e})}),(0,$.jsx)(P,{id:`drone-imbalance`,label:`Motor imbalance`,help:`How much weaker the left motor is. This is what the integral term fights.`,value:Math.round(e.imbalance*100),min:0,max:20,step:1,tickCount:21,compact:!0,formattedValue:`${Math.round(e.imbalance*100)}%`,onChange:e=>m({imbalance:e/100})})]}),(0,$.jsxs)(j,{accentWash:!0,children:[(0,$.jsx)(M,{icon:`function`,children:`The control law`}),(0,$.jsxs)(`div`,{className:`mt-5 grid items-center gap-6 xl:grid-cols-2`,children:[(0,$.jsxs)(`div`,{className:`overflow-x-auto py-2 text-lg`,children:[(0,$.jsx)(be,{display:!0,label:`PID control law`,tex:`u(t) = K_p\\,e(t) + K_i \\int_0^t e(\\tau)\\,d\\tau + K_d\\,\\frac{d}{dt}e(t)`}),(0,$.jsx)(`div`,{className:`mt-3 text-center`,children:(0,$.jsx)(be,{display:!0,label:`Error definition`,tex:`e(t) = \\theta_{\\text{desired}} - \\theta_{\\text{current}}`})})]}),(0,$.jsxs)(`div`,{className:`space-y-2 font-mono text-sm tabular-nums text-muted-foreground`,children:[(0,$.jsx)(`div`,{className:`ga-mono-label mb-3`,children:`Live, right now`}),(0,$.jsx)(`div`,{className:`text-foreground`,children:te.errorLine}),(0,$.jsx)(`div`,{className:`text-foreground`,children:te.line}),(0,$.jsx)(`p`,{className:`pt-2 font-sans text-sm leading-6`,children:`The correction u is subtracted from the left motor and added to the right one, so the rig always gets a torque toward the setpoint.`})]})]})]})]})]}),(0,$.jsx)(o,{label:`Method`,width:420}),(0,$.jsxs)(`footer`,{className:`mx-auto max-w-4xl py-8 text-sm leading-6 text-muted-foreground`,children:[(0,$.jsx)(`p`,{children:`The rig is a one-degree-of-freedom birotor: torque comes from the thrust difference between the two rotors, integrated at 240 Hz with a fixed step. The controller runs in the degrees domain with derivative-on-measurement and a clamped integral, the same shape hobby flight controllers use. It teaches one mechanism, not a benchmark promise.`}),(0,$.jsxs)(`div`,{className:`mt-3 flex flex-wrap gap-x-5 gap-y-2`,children:[(0,$.jsxs)(`a`,{href:`https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller`,target:`_blank`,rel:`noreferrer`,className:`inline-flex min-h-11 items-center gap-1.5 text-foreground underline decoration-border-strong underline-offset-4`,children:[`PID controller`,(0,$.jsx)(c,{name:`arrow-up-right`,size:14})]}),(0,$.jsxs)(`a`,{href:`https://www.ubicoders.com`,target:`_blank`,rel:`noreferrer`,className:`inline-flex min-h-11 items-center gap-1.5 text-foreground underline decoration-border-strong underline-offset-4`,children:[`Inspired by ubicoders`,(0,$.jsx)(c,{name:`arrow-up-right`,size:14})]})]})]})]})]})}var Q,$,ht,gt;t((()=>{Q=e(n(),1),i(),s(),_e(),Se(),Ce(),ye(),dt(),it(),$=a(),ht=[{id:`p`,label:`P only`,kp:3,ki:0,kd:0},{id:`pd`,label:`PD`,kp:4,ki:0,kd:1.2},{id:`pid`,label:`PID`,kp:4,ki:.8,kd:1.2},{id:`wild`,label:`Unstable`,kp:9,ki:2,kd:0}],gt=160}))();export{mt as default};